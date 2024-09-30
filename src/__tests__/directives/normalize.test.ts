import { describe, it, expect } from 'vitest';
import { toHeaderCasing, camelcaseToKebab } from '../../directives/normalize';

describe('./src/directives/normalize.ts', () => {
  describe('toHeaderCasing', () => {
    it('converts a camelCased string to kebab-case', () => {
      const result = toHeaderCasing('camelCasedString');
      expect(result).toEqual('Camel-Cased-String');
    });
  });

  describe('camelcaseToKebab', () => {
    it('converts a kebab-case into Header-Case', () => {
      const result = camelcaseToKebab('camelCasedString');
      expect(result).toEqual('camel-cased-string');
    });
  });
});
