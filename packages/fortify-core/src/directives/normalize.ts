/**
 * @function camelcaseToKebab converts a camel-cased string and convert it to kebab-casing
 * @param str represents the camel-cased string
 * @returns kebab-cased string
 */
export function camelcaseToKebab(str: string): string {
  return str.replace(
    /[A-Z]/g,
    (capitalLetter) => `-${capitalLetter.toLowerCase()}`,
  );
}
