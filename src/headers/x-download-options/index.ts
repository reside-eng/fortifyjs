import { applyDefaultsIfNecessary } from '../../directives/defaults';
import { directiveValidation } from '../../directives/validation';
import { type XDownloadOptions } from './types';

const HEADER_NAME = 'X-Download-Options';

const validation = directiveValidation(HEADER_NAME, {
  allowedDirectives: ['noopen'],
});

/**
 * Generates the X-Download-Options header and returns it in an object to the caller. (Not in HTTP Spec / Specific to IE8 Security)
 */
export function xDownloadOptions(settings: XDownloadOptions) {
  const headerConfig = applyDefaultsIfNecessary(settings, {
    noopen: true,
  });

  const headerValue = validation.checkForValidity(headerConfig, 'ONE');

  return {
    [HEADER_NAME]: headerValue,
  };
}
