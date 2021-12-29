import { directiveValidation } from '../../directives/validation';

const HEADER_NAME = 'Cross-Origin-Resource-Policy';

const validation = directiveValidation(HEADER_NAME, {
  allowedDirectives: ['same-origin', 'same-site', 'cross-origin'],
});

/**
 * @function crossOriginResourcePolicy generates the Content-Origin-Resource-Policy and returns it in an object to the caller
 * @param directive represents the policy being applied in this header
 * @returns an object containing the Cross-Origin-Resource-Policy header
 */
export function crossOriginResourcePolicy(directive: string) {
  validation.checkForValidity(directive);

  return {
    [HEADER_NAME]: directive,
  };
}
