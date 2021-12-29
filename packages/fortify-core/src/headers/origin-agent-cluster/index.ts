import { directiveValidation } from '../../directives/validation';

const HEADER_NAME = 'Origin-Agent-Cluster';

const validation = directiveValidation(HEADER_NAME, {
  allowedDirectives: ['?1'],
});

/**
 * @function originAgentCluster generates the Origin-Agent-Cluster header and returns it in an object to the caller.
 * It takes no parameters and defaults to `?1`, which is structured header syntax for a boolean "true".
 * @param directive represents the header configuration
 * @returns an object containing the Cross-Origin-Resource-Policy header
 */
export function originAgentCluster(directive = '?1') {
  validation.checkForValidity(directive);

  return {
    [HEADER_NAME]: directive,
  };
}
