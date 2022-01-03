import { applyDefaultsIfNecessary } from '../../directives/defaults';
import { StrictTransportSecurity } from './types';
import { directiveValidation } from '../../directives/validation';

const HEADER_NAME = 'Strict-Transport-Security';

const validation = directiveValidation(HEADER_NAME, {
  allowedDirectives: ['max-age', 'includeSubDomains', 'preload'],
  separators: {
    maxAge: '=',
  },
});

/**
 * @function strictTransportSecurity generates the Strict-Transport-Security header and returns it in an object to the caller
 * @param settings represents the complete header configuration
 * @returns an object containing the Referrer-Policy header
 */
export function strictTransportSecurity(settings: StrictTransportSecurity) {
  const headerConfig = applyDefaultsIfNecessary(settings, {
    maxAge: 180 * 24 * 60 * 60,
  });

  const headerValue = validation.checkForValidity(headerConfig, 'MANY');

  return {
    [HEADER_NAME]: headerValue,
  };
}
