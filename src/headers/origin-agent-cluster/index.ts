import { applyDefaultsIfNecessary } from '../../directives/defaults';
import { directiveValidation } from '../../directives/validation';
import type { OriginAgentCluster } from './types';

const HEADER_NAME = 'Origin-Agent-Cluster';

const validation = directiveValidation(HEADER_NAME, {
  allowedDirectives: ['enable'],
});

/**
 * Generates the Origin-Agent-Cluster header and returns it in an object to the caller. The final value is the structured header syntax for boolean: '?1' for true, '?0' for false
 */
export function originAgentCluster(settings: OriginAgentCluster) {
  const headerConfig = applyDefaultsIfNecessary(settings, {
    enable: true,
  });

  // no need to get the return since this header config is so unique
  validation.checkForValidity(headerConfig, 'ONE');

  // simple mapping from boolean to header syntax
  const headerValue = headerConfig.enable ? '?1' : '?0';

  return {
    [HEADER_NAME]: headerValue,
  };
}
