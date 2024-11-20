import type { FortifyHeader } from '../types';

/**
 * Represents the user-specified header configuration for Origin-Agent-Cluster
 * see: https://web.dev/origin-agent-cluster/
 */
export type OriginAgentCluster = FortifyHeader & {
  /**
   * Represents enabling the agent cluster policy
   */
  enable?: boolean;
};
