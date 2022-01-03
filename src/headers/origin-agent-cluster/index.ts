import { applyDefaultsIfNecessary } from '../../directives/defaults';
import { directiveValidation } from '../../directives/validation';
import { OriginAgentCluster } from './types';

const HEADER_NAME = 'Origin-Agent-Cluster';

const validation = directiveValidation(HEADER_NAME, {
  allowedDirectives: ['enable'],
});

/**
 * @function originAgentCluster generates the Origin-Agent-Cluster header and returns it in an object to the caller.
 * It takes no parameters and defaults to `?1`, which is structured header syntax for a boolean "true".
 * @param settings represents the header configuration
 * @returns an object containing the Cross-Origin-Resource-Policy header
 */
export function originAgentCluster(settings: OriginAgentCluster) {
  const headerConfig = applyDefaultsIfNecessary(settings, {
    enable: true,
  });

  // no need to get the return since this header config is so unique
  validation.checkForValidity(headerConfig, 'ONE');

  // simple mapping from boolean to header syntax
  const headerValue = headerConfig.enable ? '?1' : '';

  return {
    [HEADER_NAME]: headerValue,
  };
}
