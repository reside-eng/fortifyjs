import { applyDefaultsIfNecessary } from '../../directives/defaults';
import { directiveValidation } from '../../directives/validation';
import { type XFrameOptions } from './types';

const HEADER_NAME = 'X-Frame-Options';

const validation = directiveValidation(HEADER_NAME, {
  allowedDirectives: ['deny', 'sameorigin'],
});

/**
 * Generates the X-Frame-Options header and returns it in an object to the caller.
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
