import { FortifyHeader } from '../types';

/**
 * Represents the user-specified header configuration for X-Permitted-Cross-Domain-Policies
 * see: https://owasp.org/www-project-secure-headers/#x-permitted-cross-domain-policies
 */
export type XPermittedCrossDomainPolicies = FortifyHeader & {
  /**
   * No policy files are allowed anywhere on the target server, including this master policy file.
   */
  none?: boolean;
  /**
   * Only this master policy file is allowed.
   */
  masterOnly?: boolean;
  /**
   * [HTTP/HTTPS only] Only policy files served with Content-Type: text/x-cross-domain-policy are allowed.
   */
  byContentType?: boolean;
  /**
   * [FTP only] Only policy files whose file names are crossdomain.xml (i.e. URLs ending in /crossdomain.xml) are allowed.
   */
  byFtpFilename?: boolean;
  /**
   * All policy files on this target domain are allowed
   */
  all?: boolean;
};
