import { applyDefaultsIfNecessary } from '../../directives/defaults';
import { directiveValidation } from '../../directives/validation';
import { XPermittedCrossDomainPolicies } from './types';

const HEADER_NAME = 'X-Permitted-Cross-Domain-Policies';

const validation = directiveValidation(HEADER_NAME, {
  allowedDirectives: ['none', 'master-only', 'by-content-type', 'all'],
});

/**
 * Generates the X-Permitted-Cross-Domain-Policies header and returns it in an object to the caller.
 */
export function xPermittedCrossDomainPolicies(
  settings: XPermittedCrossDomainPolicies,
) {
  const headerConfig = applyDefaultsIfNecessary(settings, {
    none: true,
  });

  const headerValue = validation.checkForValidity(headerConfig, 'ONE');

  return {
    [HEADER_NAME]: headerValue,
  };
}
