/**
 * Represents the configuration for the validation module
 */
export interface ValidationSettings {
  /**
   * An array of the allowed kebab-cased directives for a header
   */
  readonly allowedDirectives: ReadonlyArray<string>;
  /**
   * An object literal of the parameters that have special formatting. Separators defines the character delineating the directiveKey from the directiveValue: e.g. max-age=12345. Defaults to ' '.
   */
  separators?: { [key: string]: string };
}

/**
 * Determines whether the header allows multiple directives or only one
 */
export type SelectionType = 'ONE' | 'MANY';
