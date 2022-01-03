export interface ValidationSettings {
  allowedDirectives: string[];
  separators?: { [key: string]: string };
}

export type SelectionType = 'ONE' | 'MANY';
