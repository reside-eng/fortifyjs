import { FortifyHeader } from '../headers/types';
import { camelcaseToKebab } from './normalize';
import { SelectionType, ValidationSettings } from './types';

/**
 * @function directiveValidation returns a client for validating user-specified directive configurations
 * @param headerName is the string header on the FortifySettings
 * @param settings represents the directive settings
 * @param settings.allowedDirectives represents the allowed set of directives for a given header
 * @returns client for executing validation against a user-specified header configuration
 */
export function directiveValidation(
  headerName: string,
  { allowedDirectives }: ValidationSettings,
) {
  const ALLOWED_DIRECTIVES = new Set(allowedDirectives);

  if (!Array.isArray(allowedDirectives)) {
    throw new Error(
      `Allowable directives for ${headerName} must be an array. ${allowedDirectives} is invalid.`,
    );
  }

  /**
   * @function validateSelectionType will validate the user-specified header configuration by the allowed selection type
   * @param seenKeys represents the number of keys seen during validation
   * @param specificationName represents the formal name of the directive in the HTTP specification
   * @param selectionType represents the number of directives allowed for selection
   */
  function validateSelectionType(
    seenKeys: Array<string>,
    specificationName: string,
    selectionType: SelectionType,
  ) {
    if (selectionType === 'ONE') {
      if (seenKeys.length > 0) {
        throw new Error(
          `${headerName}.${specificationName} only allows one selection. You can only specify one option for this header.`,
        );
      }
    }
  }

  /**
   * @function checkForValidity uses the object passed in to detect if properties are valid based on the allowed
   * directives configured for validation
   * @param config represents the header configuration
   * @param selectionType represents the number of directives allowed. Some headers allow multiple directives like CSP, others allow only one. This parameter tells the validator to throw if more than one parameter is defined.
   * @returns the final directive value as a string
   */
  function checkForValidity(
    config: FortifyHeader,
    selectionType: SelectionType,
  ): string {
    const seenKeys = new Array<string>();
    const directives = Object.entries(config).map(function validateEachKey([
      directiveKey,
      directiveToken,
    ]) {
      // select validation schema based on directive key
      // strip unknown values
      // check for selection types based on type

      const specificationName = camelcaseToKebab(directiveKey);
      const isValid = ALLOWED_DIRECTIVES.has(specificationName);
      if (!isValid) {
        throw new Error(
          `${headerName} does not support the ${JSON.stringify(
            specificationName,
          )}. It is not in the specification.`,
        );
      }

      validateSelectionType(seenKeys, specificationName, selectionType);

      seenKeys.push(specificationName);
      if (typeof directiveToken === 'boolean') {
        return specificationName;
      }

      if (Array.isArray(directiveToken)) {
        return `${specificationName} ${(directiveToken as string[]).join(' ')}`;
      }

      return `${specificationName} ${directiveToken}`;
    });

    return directives.join('; ');
  }

  return { checkForValidity };
}
