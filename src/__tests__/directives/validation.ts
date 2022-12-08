import { directiveValidation } from '../../directives/validation';

type FastifySettingPlaceholder = Record<string, string[] | boolean | number>;

describe('./src/directives/validation.ts', () => {
  describe('successful validation scenarios', () => {
    it('validated basic generic object', () => {
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

  describe('failed validation scenarios', () => {
    describe('selection type errors', () => {
      it('fails when more than one directive is defined and selection type is ONE', () => {
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
          `"Header-Name only allows one selection. You can only specify one option for this header."`,
        );
      });

      it('fails when an directive value is an empty array', () => {
        const headerValidation = directiveValidation('Header-Name', {
          allowedDirectives: ['test-directive'],
        });
        expect(() =>
          headerValidation.checkForValidity(
            { testDirective: [] } as FastifySettingPlaceholder,
            'ONE',
          ),
        ).toThrowErrorMatchingInlineSnapshot(
          `"Header-Name.testDirective array must contain non-empty strings."`,
        );
      });

      it('fails when an empty string is added as a directive value', () => {
        const headerValidation = directiveValidation('Header-Name', {
          allowedDirectives: ['test-directive'],
        });
        expect(() =>
          headerValidation.checkForValidity(
            { testDirective: [''] } as FastifySettingPlaceholder,
            'ONE',
          ),
        ).toThrowErrorMatchingInlineSnapshot(
          `"Header-Name.testDirective array must contain non-empty strings."`,
        );
      });

      it('fails when a directive is a number and the number is negative', () => {
        const headerValidation = directiveValidation('Header-Name', {
          allowedDirectives: ['test-directive'],
        });
        expect(() =>
          headerValidation.checkForValidity(
            { testDirective: -1999 } as FastifySettingPlaceholder,
            'ONE',
          ),
        ).toThrowErrorMatchingInlineSnapshot(
          `"Header-Name.testDirective must be set to a number greater than 0 and less than infinite."`,
        );
      });

      it('fails when the value is a number and the number is infinite', () => {
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

      it('fails when invalid characters are added to a directive value', () => {
        const headerValidation = directiveValidation('Header-Name', {
          allowedDirectives: ['test-directive'],
        });
        expect(() =>
          headerValidation.checkForValidity(
            { testDirective: [';|'] } as FastifySettingPlaceholder,
            'ONE',
          ),
        ).toThrowErrorMatchingInlineSnapshot(
          `"Header-Name.testDirective value of directive is invalid. Directive value cannot contain ;|,: ";|""`,
        );
      });
    });

    describe('unexpected user entry', () => {
      it('fails when the header name is undefined', () => {
        expect(() =>
          directiveValidation(undefined as any, { allowedDirectives: [] }),
        ).toThrowErrorMatchingInlineSnapshot(
          `"headerName can only be a non-empty string"`,
        );
      });
      it('fails when the header name is not a string', () => {
        expect(() =>
          directiveValidation({} as any, { allowedDirectives: [] }),
        ).toThrowErrorMatchingInlineSnapshot(
          `"headerName can only be a non-empty string"`,
        );
      });

      it('fails when the header name is an empty string', () => {
        expect(() =>
          directiveValidation('', { allowedDirectives: [] }),
        ).toThrowErrorMatchingInlineSnapshot(
          `"headerName can only be a non-empty string"`,
        );
      });

      it('expects only an array of strings for allowedDirectives', () => {
        expect(() =>
          directiveValidation('Header-Name', {
            allowedDirectives: 'incorrect-format',
          } as any),
        ).toThrowErrorMatchingInlineSnapshot(
          `"Allowable directives for Header-Name must be an array. incorrect-format is invalid."`,
        );
      });

      it('fails when key is not allowed', () => {
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
          `"Header-Name does not support the "not-allowed". It is not in the specification."`,
        );
      });
    });
  });
});
