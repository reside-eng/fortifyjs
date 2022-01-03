import { applyDefaultsIfNecessary } from '../../directives/defaults';
import { directiveValidation } from '../../directives/validation';
import { XFrameOptions } from './types';

const HEADER_NAME = 'X-Frame-Options';

const validation = directiveValidation(HEADER_NAME, {
  allowedDirectives: ['deny', 'sameorigin'],
});

/**
 * @function xFrameOptions generates the X-Frame-Options header and returns it in an object to the caller.
 * @param settings represents the options set to the header value: valid options are 'noopen'
 * @returns an object containing the Referrer-Policy header
 */
export function xFrameOptions(settings: XFrameOptions) {
  const headerConfig = applyDefaultsIfNecessary(settings, {
    sameorigin: true,
  });

  const headerValue = validation.checkForValidity(headerConfig, 'ONE');

  return {
    [HEADER_NAME]: headerValue.toUpperCase(),
  };
}
