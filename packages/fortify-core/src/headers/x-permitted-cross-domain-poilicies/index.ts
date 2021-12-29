import { directiveValidation } from '../../directives/validation';

const HEADER_NAME = 'X-Permitted-Cross-Domain-Policies';

const validation = directiveValidation(HEADER_NAME, {
  allowedDirectives: ['none', 'master-only', 'by-content-type', 'all'],
});

/**
 * @function xPermittedCrossDomainPolicies generates the X-Permitted-Cross-Domain-Policies header and returns it in an object to the caller.
 * @param directive represents the policy set to the header value
 * @returns an object containing the Referrer-Policy header
 */
export function xPermittedCrossDomainPolicies(directive: string) {
  validation.checkForValidity(directive);

  return {
    [HEADER_NAME]: directive,
  };
}
