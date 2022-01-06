import { toHeaderCasing, camelcaseToKebab } from '../../directives/normalize';

describe('./src/directives/normalize.ts', function normalizeDirectiveTests() {
  describe('toHeaderCasing', function headerCasingTests() {
    it('converts a camelCased string to kebab-case', function test() {
      const result = toHeaderCasing('camelCasedString');
      expect(result).toEqual('Camel-Cased-String');
    });
  });

  describe('camelcaseToKebab', function camelcaseToKebabTests() {
    it('converts a kebab-case into Header-Case', function test() {
      const result = camelcaseToKebab('camelCasedString');
      expect(result).toEqual('camel-cased-string');
    });
  });
});
