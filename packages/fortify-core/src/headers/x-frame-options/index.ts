import { directiveValidation } from '../../directives/validation';

const HEADER_NAME = 'X-Frame-Options';

const validation = directiveValidation(HEADER_NAME, {
  allowedDirectives: ['DENY', 'SAMEORIGIN'],
});

/**
 * @function xFrameOptions generates the X-Frame-Options header and returns it in an object to the caller.
 * @param directive represents the options set to the header value: valid options are 'noopen'
 * @returns an object containing the Referrer-Policy header
 */
export function xFrameOptions(directive: string) {
  validation.checkForValidity(directive);

  return {
    [HEADER_NAME]: directive,
  };
}
