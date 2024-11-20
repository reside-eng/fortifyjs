import { applyDefaultsIfNecessary } from '../../directives/defaults';
import { directiveValidation } from '../../directives/validation';
import type { ReferrerPolicy } from './types';

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
  ],
});

/**
 * Generates the Referrer-Policy header and returns it in an object to the caller
 */
export function referrerPolicy(settings: ReferrerPolicy) {
  const headerConfig = applyDefaultsIfNecessary(settings, {
    noReferrer: true,
  });

  const headerValue = validation.checkForValidity(headerConfig, 'MANY');

  return {
    [HEADER_NAME]: headerValue,
  };
}
