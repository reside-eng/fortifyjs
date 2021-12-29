import { directiveValidation } from '../../directives/validation';

const HEADER_NAME = 'Cross-Origin-Opener-Policy';

const validation = directiveValidation(HEADER_NAME, {
  allowedDirectives: ['same-origin', 'same-origin-allow-popups', 'unsafe-none'],
});

/**
 * @function crossOriginOpenerPolicy generates the Content-Origin-Opener-Policy and returns it in an object to the caller
 * @param directive represents the policy being applied in this header
 * @returns an object containing the Cross-Origin-Opener-Policy header
 */
export function crossOriginOpenerPolicy(directive = 'same-origin') {
  validation.checkForValidity(directive);

  return {
    [HEADER_NAME]: directive,
  };
}
