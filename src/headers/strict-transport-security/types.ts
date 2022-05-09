import { FortifyHeader } from '../types';

/**
 * Represents the user-specified header configuration for Strict-Transport-Security
 * see: https://developer.mozilla.org/en-us/docs/web/http/headers/strict-transport-security
 */
export type StrictTransportSecurity = FortifyHeader & {
  /**
   * The time, in seconds, that the browser should remember that a site is only to be accessed using HTTPS.
   */
  maxAge?: number;
  /**
   * If this optional parameter is specified, this rule applies to all of the site's subdomains as well.
   */
  includeSubDomains?: boolean;
  /**
   * See Preloading Strict Transport Security for details. Not part of the specification.
   */
  preload?: boolean;
};
