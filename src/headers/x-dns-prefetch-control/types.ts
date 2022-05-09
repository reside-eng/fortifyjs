import { FortifyHeader } from '../types';

/**
 * Represents the user-specified header configuration for X-DNS-Prefetch-Control
 * see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
 */
export type XDnsPrefetchControl = FortifyHeader & {
  /**
   * Enables DNS prefetching. This is what browsers do, if they support the feature, when this header is not present
   */
  on?: boolean;
  /**
   * Disables DNS prefetching. This is useful if you don't control the link on the pages, or know that you don't want to leak information to these domains.
   */
  off?: boolean;
};
