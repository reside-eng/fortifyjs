/**
 * Converts a camel-cased string and convert it to kebab-casing: e.g. script-src from scriptSrc
 */
export function camelcaseToKebab(str: string): string {
  return str.replace(
    /[A-Z]/g,
    (capitalLetter) => `-${capitalLetter.toLowerCase()}`,
  );
}

/**
 * Takes a camelCased string and converts it to kebob with upper-cased words: e.g. Content-Security-Policy from contentSecurityPolicy
 */
export function toHeaderCasing(str: string): string {
  const modifiedString = str.replace(
    /[A-Z]/g,
    (capitalLetter) => `-${capitalLetter}`,
  );
  return `${str.substring(0, 1).toUpperCase()}${modifiedString.substring(1)}`;
}
