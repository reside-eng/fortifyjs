import { applyDefaultsIfNecessary } from '../../directives/defaults';
import { directiveValidation } from '../../directives/validation';
import type { CrossOriginEmbedderPolicy } from './types';

const HEADER_NAME = 'Cross-Origin-Embedder-Policy';

const validation = directiveValidation(HEADER_NAME, {
  allowedDirectives: ['require-corp', 'unsafe-none', 'credentialless'],
});

/**
 * Generates an object with the Cross-Origin-Embedder-Policy header
 */
export function crossOriginEmbedderPolicy(settings: CrossOriginEmbedderPolicy) {
  const headerConfig = applyDefaultsIfNecessary(settings, {
    requireCorp: true,
  });

  const headerValue = validation.checkForValidity(headerConfig, 'ONE');

  return {
    [HEADER_NAME]: headerValue,
  };
}
