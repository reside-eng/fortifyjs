import { directiveValidation } from '../../directives/validation';

const HEADER_NAME = 'X-DNS-Prefetch-Control';

const validation = directiveValidation(HEADER_NAME, {
  allowedDirectives: ['on', 'off'],
});

/**
 * @function xDnsPrefetchControl generates the X-DNS-Prefetch-Control header and returns it in an object to the caller.
 * @param directive represents the options set to the header value: valid options are 'on' | 'off'
 * @returns an object containing the Referrer-Policy header
 */
export function xDnsPrefetchControl(directive: string) {
  validation.checkForValidity(directive);

  return {
    [HEADER_NAME]: directive,
  };
}
