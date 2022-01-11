export interface ValidationSettings {
  readonly allowedDirectives: ReadonlyArray<string>;
  separators?: { [key: string]: string };
}

export type SelectionType = 'ONE' | 'MANY';
