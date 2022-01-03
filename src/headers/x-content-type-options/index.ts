import { applyDefaultsIfNecessary } from '../../directives/defaults';
import { directiveValidation } from '../../directives/validation';
import { XContentTypeOotions } from './types';

const HEADER_NAME = 'X-Content-Type-Options';

const validation = directiveValidation(HEADER_NAME, {
  allowedDirectives: ['nosniff'],
});

/**
 * @function xContentTypeOptions generates the X-Content-Type-Options header and returns it in an object to the caller. The header only has one option 'nosniff' and this is added by default with the header
 * @param settings represents the option set to the header value
 * @returns an object containing the Referrer-Policy header
 */
export function xContentTypeOptions(settings: XContentTypeOotions) {
  const headerConfig = applyDefaultsIfNecessary(settings, {
    nosniff: true,
  });

  const headerValue = validation.checkForValidity(headerConfig, 'ONE');

  return {
    [HEADER_NAME]: headerValue,
  };
}
