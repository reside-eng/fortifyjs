/**
 * @function maxAge factory for the directive for max-age
 * @param headerName represents the headers name for error reporting
 * @returns an object with the factory object
 */
export function maxAgeFactory(headerName: string) {
  /**
   * @function createMaxAgeDirective generates the max-age directive
   * @param value is the value greater than 0 and less than infinite that represents the max age in seconds
   * @returns string representing the directive
   */
  function createMaxAgeDirective(value: number): string {
    const isValidMaxAge = value >= 0 && Number.isFinite(value);
    if (!isValidMaxAge) {
      throw new Error(
        `${headerName}: ${JSON.stringify(
          value,
        )} is not a valid value for maxAge. Please choose a positive, finite integer.`,
      );
    }

    return `max-age=${value}`;
  }

  return {
    createMaxAgeDirective,
  };
}
