import { applyDefaultsIfNecessary } from '../../directives/defaults';
import { directiveValidation } from '../../directives/validation';
import { CrossOriginOpenerPolicy } from './types';

const HEADER_NAME = 'Cross-Origin-Opener-Policy';

const validation = directiveValidation(HEADER_NAME, {
  allowedDirectives: ['same-origin', 'same-origin-allow-popups', 'unsafe-none'],
});

/**
 * @function crossOriginOpenerPolicy generates the Content-Origin-Opener-Policy and returns it in an object to the caller
 * @param settings represents the policy being applied in this header
 * @returns an object containing the Cross-Origin-Opener-Policy header
 */
export function crossOriginOpenerPolicy(settings: CrossOriginOpenerPolicy) {
  const headerConfig = applyDefaultsIfNecessary(settings, {
    sameOrigin: true,
  });

  const headerValue = validation.checkForValidity(headerConfig, 'ONE');

  return {
    [HEADER_NAME]: headerValue,
  };
}
