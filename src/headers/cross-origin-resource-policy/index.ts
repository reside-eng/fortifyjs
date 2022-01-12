import { applyDefaultsIfNecessary } from '../../directives/defaults';
import { directiveValidation } from '../../directives/validation';
import { CrossOriginResourcePolicy } from './types';

const HEADER_NAME = 'Cross-Origin-Resource-Policy';

const validation = directiveValidation(HEADER_NAME, {
  allowedDirectives: ['same-origin', 'same-site', 'cross-origin'],
});

/**
 * Generates the Content-Origin-Resource-Policy and returns it in an object to the caller
 */
export function crossOriginResourcePolicy(settings: CrossOriginResourcePolicy) {
  const headerConfig = applyDefaultsIfNecessary(settings, {
    sameOrigin: true,
  });

  const headerValue = validation.checkForValidity(headerConfig, 'ONE');

  return {
    [HEADER_NAME]: headerValue,
  };
}
