import { applyDefaultsIfNecessary } from '../../directives/defaults';
import { directiveValidation } from '../../directives/validation';
import { XDnsPrefetchControl } from './types';

const HEADER_NAME = 'X-Dns-Prefetch-Control';

const validation = directiveValidation(HEADER_NAME, {
  allowedDirectives: ['on', 'off'],
});

/**
 * @function xDnsPrefetchControl generates the X-DNS-Prefetch-Control header and returns it in an object to the caller.
 * @param settings represents the options set to the header value: valid options are 'on' | 'off'
 * @returns an object containing the Referrer-Policy header
 */
export function xDnsPrefetchControl(settings: XDnsPrefetchControl) {
  const headerConfig = applyDefaultsIfNecessary(settings, {
    off: true,
  });

  const headerValue = validation.checkForValidity(headerConfig, 'ONE');

  return {
    [HEADER_NAME]: headerValue,
  };
}