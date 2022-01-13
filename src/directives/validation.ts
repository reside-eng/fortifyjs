import { FortifyHeader } from '../headers/types';
import { camelcaseToKebab } from './normalize';
import { SelectionType, ValidationSettings } from './types';

/**
 * Checks a string directiveValue for invalid characters
 */
function containsInvalidCharacters(directiveValue: string): boolean {
  return /;|,/.test(directiveValue);
}

/**
 * Returns a client for validating user-specified directive configurations
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
   * Validates the user-specified header configuration by the allowed selection type
   */
  function validateSelectionType(
    seenKeys: Array<string>,
    specificationName: string,
    selectionType: SelectionType,
  ) {
    if (selectionType === 'ONE') {
      if (seenKeys.length) {
        throw new Error(
          `${headerName} only allows one selection. You can only specify one option for this header.`,
        );
      }
    }
  }

  /**
   * Adds a separator specified in the validation config for the header for a given property
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
   * Checks for different formats of the specification name, sometimes it's camelCased, othertimes it's kebab-cased.
   * This function is responsible for checking the available directives and validating the name
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
   * Uses the object passed in to detect if properties are valid based on the allowed
   * directives configured for validation
   */
  function checkForValidity(
    config: FortifyHeader,
    selectionType: SelectionType,
  ): string {
    const seenKeys: string[] = [];
    const directives = Object.entries(config).map(
      ([directiveKey, directiveToken]) => {
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
         * Function to throw for invalid token values
         */
        function throwInvalidCharError(token: string) {
          throw new Error(
            `${headerName}.${directiveKey} value of directive is invalid. Directive value cannot contain ;|,: ${JSON.stringify(
              token,
            )}`,
          );
        }

        if (Array.isArray(directiveToken)) {
          directiveToken.forEach((token) => {
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
      },
    );

    const directivesCleaned = directives.filter(
      (directive) => typeof directive !== 'undefined',
    );

    return directivesCleaned.length > 1
      ? directivesCleaned.join('; ')
      : (directivesCleaned[0] as string);
  }

  return { checkForValidity };
}
