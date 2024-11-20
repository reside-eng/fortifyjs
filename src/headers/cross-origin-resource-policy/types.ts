import { type FortifyHeader } from '../types';

/**
 * Represents the user-specified header configuration for Cross-Origin-Resource-Policy
 * see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy
 */
export type CrossOriginResourcePolicy = FortifyHeader & {
  /**
   * Only requests from the same origin (i.e. scheme + host + port) can read the resource
   */
  sameOrigin?: boolean;
  /**
   * Only requests from the same Site can read the resource.
   */
  sameSite?: boolean;
  /**
   * Requests from any origin (both same-site and cross-site) can read the resource. This is useful when COEP is used (see below).
   */
  crossOrigin?: boolean;
};
