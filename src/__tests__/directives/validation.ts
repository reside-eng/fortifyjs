/* eslint-disable @typescript-eslint/ban-ts-comment */
// ignoring this rule because in tests we can't expect the user is using typescript
// so we need to cover for a lot of unexpected values

import { directiveValidation } from '../../directives/validation';

type FastifySettingPlaceholder = Record<string, string[] | boolean | number>;

describe('./src/directives/validation.ts', function validationDirectiveTests() {
  describe('successful validation scenarios', function successfulScenarios() {
    it('validated basic generic object', function test() {
      const headerValidation = directiveValidation('Header-Name', {
        allowedDirectives: ['test-directive'],
      });
      const result = headerValidation.checkForValidity(
        { testDirective: ['default://'] } as FastifySettingPlaceholder,
        'ONE',
      );
      expect(result).toEqual('test-directive default://');
    });
  });

  describe('failed validation scenarios', function failedScenarios() {
    describe('selection type errors', function selectionTypeErrors() {
      it('fails when more than one directive is defined and selection type is ONE', function test() {
        const headerValidation = directiveValidation('Header-Name', {
          allowedDirectives: ['test-directive', 'single-selection'],
        });
        expect(() =>
          headerValidation.checkForValidity(
            {
              testDirective: ['default://'],
              singleSelection: false,
            } as FastifySettingPlaceholder,
            'ONE',
          ),
        ).toThrowErrorMatchingInlineSnapshot(
          `"Header-Name.single-selection only allows one selection. You can only specify one option for this header."`,
        );
      });

      it('fails when duplicates are defined when selection type is MANY', function test() {
        const headerValidation = directiveValidation('Header-Name', {
          allowedDirectives: ['test-directive', 'single-selection'],
        });
        expect(() =>
          headerValidation.checkForValidity(
            {
              testDirective: ['default://'],
              // @ts-ignore next-line
              testDirective: false,
            } as FastifySettingPlaceholder,
            'MANY',
          ),
        ).toThrowErrorMatchingInlineSnapshot();
      });

      it('fails when an empty string is added as a directive value', function test() {
        const headerValidation = directiveValidation('Header-Name', {
          allowedDirectives: ['test-directive'],
        });
        expect(() =>
          headerValidation.checkForValidity(
            // eslint-ignore-next-line
            { testDirective: [''] } as FastifySettingPlaceholder,
            'ONE',
          ),
        ).toThrowErrorMatchingInlineSnapshot();
      });

      it('fails when a directive is a number and the number is negative', function test() {
        const headerValidation = directiveValidation('Header-Name', {
          allowedDirectives: ['test-directive'],
        });
        expect(() =>
          headerValidation.checkForValidity(
            // eslint-ignore-next-line
            { testDirective: -1 } as FastifySettingPlaceholder,
            'ONE',
          ),
        ).toThrowErrorMatchingInlineSnapshot();
      });

      it('fails when the value is a number and the number is infinite', function test() {
        const headerValidation = directiveValidation('Header-Name', {
          allowedDirectives: ['test-directive'],
        });
        expect(() =>
          headerValidation.checkForValidity(
            { testDirective: Infinity } as FastifySettingPlaceholder,
            'ONE',
          ),
        ).toThrowErrorMatchingInlineSnapshot(
          `"Header-Name.testDirective must be set to a number greater than 0 and less than infinite."`,
        );
      });

      it('fails when invalid characters are added to a directive value', function test() {
        const headerValidation = directiveValidation('Header-Name', {
          allowedDirectives: ['test-directive'],
        });
        expect(() =>
          headerValidation.checkForValidity(
            { testDirective: [';|'] } as FastifySettingPlaceholder,
            'ONE',
          ),
        ).toThrowErrorMatchingInlineSnapshot(
          `"Header-Name.testDirective value of directive is invalid. Directive value cannot contain ;|,: \\";|\\""`,
        );
      });
    });

    describe('unexpected user entry', function unexpectedEntryTests() {
      it('fails when the header name is undefined', function test() {
        expect(() =>
          // eslint-disable-next-line
          directiveValidation(undefined as any, { allowedDirectives: [] })
        ).toThrowErrorMatchingInlineSnapshot(
          `"headerName can only be a non-empty string"`,
        );
      });
      it('fails when the header name is not a string', function test() {
        expect(() =>
          // eslint-disable-next-line
          directiveValidation({} as any, { allowedDirectives: [] })
        ).toThrowErrorMatchingInlineSnapshot(
          `"headerName can only be a non-empty string"`,
        );
      });

      it('fails when the header name is an empty string', function test() {
        expect(() =>
          directiveValidation('', { allowedDirectives: [] }),
        ).toThrowErrorMatchingInlineSnapshot(
          `"headerName can only be a non-empty string"`,
        );
      });

      it('expects only an array of strings for allowedDirectives', function test() {
        expect(() =>
          directiveValidation('Header-Name', {
            // @ts-ignore next-line
            allowedDirectives: 'incorrect-format',
          }),
        ).toThrowErrorMatchingInlineSnapshot(
          `"Allowable directives for Header-Name must be an array. incorrect-format is invalid."`,
        );
      });

      it('fails when key is not allowed', function test() {
        const headerValidation = directiveValidation('Header-Name', {
          allowedDirectives: ['test-directive'],
        });

        expect(() =>
          headerValidation.checkForValidity(
            {
              notAllowed: ['not-allowed-value'],
            } as FastifySettingPlaceholder,
            'ONE',
          ),
        ).toThrowErrorMatchingInlineSnapshot(
          `"Header-Name does not support the \\"not-allowed\\". It is not in the specification."`,
        );
      });
    });
  });
});
