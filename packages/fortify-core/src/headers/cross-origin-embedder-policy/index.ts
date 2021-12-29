import { directiveValidation } from '../../directives/validation';

const HEADER_NAME = 'Cross-Origin-Embedder-Policy';

const validation = directiveValidation(HEADER_NAME, {
  allowedDirectives: ['require-corp'],
});

/**
 * @function crossOriginEmbedderPolicy generates an object with the Cross-Origin-Embedder-Policy header
 * @param directive represents the policy being applied in this header
 * @returns an object containing the Cross-Origin-Embedder-Policy header
 */
export function crossOriginEmbedderPolicy(directive = 'require-corp') {
  validation.checkForValidity(directive);

  return {
    [HEADER_NAME]: directive,
  };
}
