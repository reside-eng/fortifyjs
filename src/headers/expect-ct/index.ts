import { applyDefaultsIfNecessary } from '../../directives/defaults';
import { directiveValidation } from '../../directives/validation';
import { ExpectCt } from './types';

const HEADER_NAME = 'Expect-Ct';

const validation = directiveValidation(HEADER_NAME, {
  allowedDirectives: ['max-age', 'enforce', 'report-uri'],
  separators: {
    maxAge: '=',
    reportUri: '=',
  },
});

/**
 * @function expectCt generates the Expect-CT header and returns it in an object to the caller
 * @param settings represents the header configuration
 * @returns an object containing the Cross-Origin-Resource-Policy header
 */
export function expectCt(settings: ExpectCt) {
  const headerConfig = applyDefaultsIfNecessary(settings, {
    maxAge: 0,
  });

  const headerValue = validation.checkForValidity(headerConfig, 'MANY');

  return {
    [HEADER_NAME]: headerValue,
  };
}
