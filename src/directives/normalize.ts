/**
 * @function camelcaseToKebab converts a camel-cased string and convert it to kebab-casing: e.g. script-src from scriptSrc
 * @param str represents the camel-cased string
 * @returns kebab-cased string
 */
export function camelcaseToKebab(str: string): string {
  return str.replace(
    /[A-Z]/g,
    (capitalLetter) => `-${capitalLetter.toLowerCase()}`,
  );
}

/**
 * @function toHeaderCasing takes a camelCased string and converts it to kebob with upper-cased words: e.g. Content-Security-Policy from contentSecurityPolicy
 * @param str camelCased string to convert to header format
 * @returns properly formatted header name
 */
export function toHeaderCasing(str: string): string {
  const modifiedString = str.replace(
    /[A-Z]/g,
    (capitalLetter) => `-${capitalLetter}`,
  );
  return `${str.substring(0, 1).toUpperCase()}${modifiedString.substring(1)}`;
}
