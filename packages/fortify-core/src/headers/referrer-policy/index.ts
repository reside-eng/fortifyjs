import { directiveValidation } from '../../directives/validation';

const HEADER_NAME = 'Referrer-Policy';

const validation = directiveValidation(HEADER_NAME, {
  allowedDirectives: [
    'no-referrer',
    'no-referrer-when-downgrade',
    'same-origin',
    'origin',
    'strict-origin',
    'origin-when-cross-origin',
    'strict-origin-when-cross-origin',
    'unsafe-url',
    '',
  ],
});

/**
 * @function referrerPolicy generates the Referrer-Policy header and returns it in an object to the caller
 * @param directives represents the policies being applied in this header
 * @returns an object containing the Referrer-Policy header
 */
export function referrerPolicy(directives: string[]) {
  validation.checkForValidity(directives);

  return {
    [HEADER_NAME]: directives,
  };
}
