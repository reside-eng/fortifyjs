import { applyDefaultsIfNecessary } from '../../directives/defaults';
import { directiveValidation } from '../../directives/validation';
import type { CrossOriginEmbedderPolicy } from './types';

const HEADER_NAME = 'Cross-Origin-Embedder-Policy';

const validation = directiveValidation(HEADER_NAME, {
  allowedDirectives: ['require-corp'],
});

/**
 * @function crossOriginEmbedderPolicy generates an object with the Cross-Origin-Embedder-Policy header
 * @param settings represents the policy being applied in this header
 * @returns an object containing the Cross-Origin-Embedder-Policy header
 */
export function crossOriginEmbedderPolicy(settings: CrossOriginEmbedderPolicy) {
  const headerConfig = applyDefaultsIfNecessary(settings, {
    requireCorp: true,
  });

  // add defaults requireCorp is true
  validation.checkForValidity(headerConfig, 'ONE');

  return {
    [HEADER_NAME]: headerConfig,
  };
}
