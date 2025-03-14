import { applyDefaultsIfNecessary } from '../../directives/defaults';
import { directiveValidation } from '../../directives/validation';
import type { StrictTransportSecurity } from './types';

const HEADER_NAME = 'Strict-Transport-Security';

const validation = directiveValidation(HEADER_NAME, {
  allowedDirectives: ['max-age', 'includeSubDomains', 'preload'],
  separators: {
    maxAge: '=',
  },
});

/**
 * Generates the Strict-Transport-Security header and returns it in an object to the caller
 */
export function strictTransportSecurity(settings: StrictTransportSecurity) {
  const headerConfig = applyDefaultsIfNecessary(settings, {
    maxAge: 365 * 24 * 60 * 60,
  });

  const headerValue = validation.checkForValidity(headerConfig, 'MANY');

  return {
    [HEADER_NAME]: headerValue,
  };
}
