import { maxAgeFactory } from '../../directives/maxAge';
import { StrictTransportSecurity } from './types';

const HEADER_NAME = 'Strict-Transport-Security';
const DEFAULT_MAX_AGE = 180 * 24 * 60 * 60;
const maxAgeDirective = maxAgeFactory(HEADER_NAME);

/**
 * @function strictTransportSecurity generates the Strict-Transport-Security header and returns it in an object to the caller
 * @param settings represents the complete header configuration
 * @param settings.maxAge the time, in seconds, that the browser should remember that a site is only to be accessed using HTTPS.
 * @param settings.includeSubDomains if this optional parameter is specified, this rule applies to all of the site's subdomains as well.
 * @param settings.preload indicates whether you want to use Google's HSTS preload service or not (https://hstspreload.org/)
 * @returns an object containing the Referrer-Policy header
 */
export function strictTransportSecurity({
  maxAge = DEFAULT_MAX_AGE,
  includeSubDomains,
  preload,
}: StrictTransportSecurity): string {
  const directives: string[] = [maxAgeDirective.createMaxAgeDirective(maxAge)];
  if (includeSubDomains) {
    directives.push('includeSubDomains');
  }

  if (preload) {
    directives.push('preload');
  }

  return directives.join(', ');
}
