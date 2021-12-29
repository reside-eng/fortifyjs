/**
 * @function directiveValidation returns a client for validating user-specified directive configurations
 * @param headerName is the string header on the FortifySettings
 * @param settings represents the directive settings
 * @param settings.allowedDirectives represents the allowed set of directives for a given header
 * @returns client for executing validation against a user-specified header configuration
 */
export function directiveValidation(headerName: string, { allowedDirectives }) {
  const ALLOWED_DIRECTIVES = new Set(allowedDirectives);

  if (!Array.isArray(allowedDirectives)) {
    throw new Error(
      `Allowable directives for ${headerName} must be an array. ${allowedDirectives} is invalid.`,
    );
  }

  /**
   * @function allowOneSelectionCheck ensures that the single-selection is valid against what's allowed for the header
   * @param directive represents a user-specified directive for a header of HEADER_NAME
   * @returns the string directive after passing
   */
  function allowOneSelectionCheck(directive: string): string {
    if (!ALLOWED_DIRECTIVES.has(directive)) {
      throw new Error(
        `${headerName} does not support the ${JSON.stringify(
          directive,
        )} directive`,
      );
    }

    return directive;
  }

  /**
   * @function allowMultipleSelectionCheck ensures that the multi-selection is valid against what's allowed for the header
   * @param directives represents a user-specified directive for a header of HEADER_NAME
   * @returns the string directive after passing
   */
  function allowMultipleSelectionCheck(directives: string[]) {
    if (directives.length === 0) {
      throw new Error(`${headerName} received an unexpected policy tokens`);
    }

    const tokens = directives.map((directive) => {
      allowOneSelectionCheck(directive);

      return directive;
    });

    return tokens.join(', ');
  }

  /**
   * @function checkForPolicy runs validation against the allowed directives for a given header
   * @param directiveValues are the user-specified values for a given directive
   * @returns directive values
   */
  function checkForValidity(directiveValues: string[] | string) {
    if (Array.isArray(directiveValues)) {
      return allowMultipleSelectionCheck(directiveValues);
    }

    return allowOneSelectionCheck(directiveValues);
  }

  return { checkForValidity };
}
