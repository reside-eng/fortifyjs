import { FortifyHeader } from '../headers/types';
import { camelcaseToKebab } from './normalize';
import { SelectionType, ValidationSettings } from './types';

/**
 * @function containsInvalidCharacters checks a string directiveValue for invalid characters
 * @param {string} directiveValue represents the string value of header
 * @returns {boolean} represents whether it contains invalid characters or not
 */
function containsInvalidCharacters(directiveValue: string): boolean {
  return /;|,/.test(directiveValue);
}

/**
 * @function directiveValidation returns a client for validating user-specified directive configurations
 * @param headerName is the string header on the FortifySettings
 * @param settings represents the directive settings
 * @param settings.separators represents an optional map between property of header config and the separator between key and value in the final result
 * @param settings.allowedDirectives represents the allowed set of directives for a given header
 * @returns client for executing validation against a user-specified header configuration
 */
export function directiveValidation(
  headerName: string,
  { allowedDirectives, separators = {} }: ValidationSettings,
) {
  if (
    !headerName ||
    typeof headerName !== 'string' ||
    headerName.length === 0
  ) {
    throw new Error('headerName can only be a non-empty string');
  }

  const ALLOWED_DIRECTIVES: ReadonlySet<string> = new Set(allowedDirectives);

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
      if (seenKeys.length !== 1) {
        throw new Error(
          `${headerName}.${specificationName} only allows one selection. You can only specify one option for this header.`,
        );
      }
    }
  }

  /**
   * @function format adds a separator specified in the validation config for the header for a given property
   * @param directiveKey is the key to a header directive
   * @param specificationName is the kebab-cased name in the specification
   * @param directiveValue is the value for a header directive
   * @returns the final result of adding or not adding a separator
   */
  function format(
    directiveKey: string,
    specificationName: string,
    directiveValue: string,
  ) {
    const separator = separators[directiveKey] || ' ';

    return `${specificationName}${separator}${directiveValue}`;
  }

  /**
   * @function getSpecificationName checks for different formats of the specification name, sometimes it's camelCased, othertimes it's kebab-cased.
   * This function is responsible for checking the available directives and validating the name
   * @param directiveName represents the unadulterated directiveName
   * @returns the correct specification name for the property
   * @throws if no camelCased or kebab-cased directive name can be found
   */
  function getSpecificationName(directiveName: string) {
    const validAsIs = ALLOWED_DIRECTIVES.has(directiveName);
    if (validAsIs) {
      return directiveName; // the camelcased name of the model is the spec name
    }
    const kebabName = camelcaseToKebab(directiveName);
    const validAsKebab = ALLOWED_DIRECTIVES.has(kebabName);
    if (!validAsKebab) {
      throw new Error(
        `${headerName} does not support the ${JSON.stringify(
          kebabName,
        )}. It is not in the specification.`,
      );
    }

    return kebabName;
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
    const seenKeys: string[] = [];
    const directives = Object.entries(config).map(function validateEachKey([
      directiveKey,
      directiveToken,
    ]) {
      const specificationName = getSpecificationName(directiveKey);
      validateSelectionType(seenKeys, specificationName, selectionType);
      seenKeys.push(specificationName);
      if (
        Array.isArray(directiveToken) &&
        (directiveToken.length === 0 || directiveToken.includes(''))
      ) {
        throw new Error(
          `${headerName}.${directiveKey} array must contain non-empty strings.`,
        );
      }

      if (typeof directiveToken === 'boolean') {
        return directiveToken ? specificationName : undefined;
      }

      if (
        typeof directiveToken === 'number' &&
        (directiveToken < 0 || !Number.isFinite(directiveToken))
      ) {
        throw new Error(
          `${headerName}.${directiveKey} must be set to a number greater than 0 and less than infinite.`,
        );
      }

      /**
       * @function throwInvalidCharError is a local function responsible for displaying error for invalid token values
       * @param token represents the directive value
       * @throws error
       */
      function throwInvalidCharError(token: string) {
        throw new Error(
          `${headerName}.${directiveKey} value of directive is invalid. Directive value cannot contain ;|,: ${JSON.stringify(
            token,
          )}`,
        );
      }

      if (Array.isArray(directiveToken)) {
        directiveToken.forEach(function checkToken(token) {
          const isInvalid = containsInvalidCharacters(token);
          if (isInvalid) {
            throwInvalidCharError(token);
          }
        });

        return format(
          directiveKey,
          specificationName,
          directiveToken.join(' '),
        );
      }

      return format(directiveKey, specificationName, directiveToken);
    });

    const directivesCleaned = directives.filter(function filterNulls(
      directive,
    ) {
      return typeof directive !== 'undefined';
    });

    return directivesCleaned.length > 1
      ? directivesCleaned.join('; ')
      : (directivesCleaned[0] as string);
  }

  return { checkForValidity };
}
