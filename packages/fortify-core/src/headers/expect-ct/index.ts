import { maxAgeFactory } from '../../directives/maxAge';
import { ExpectCt } from './types';

const HEADER_NAME = 'Expect-CT';
const maxAgeDirective = maxAgeFactory(HEADER_NAME);

/**
 * @function expectCt generates the Expect-CT header and returns it in an object to the caller
 * @param settings represents the header configuration
 * @param settings.maxAge the number of seconds after reception of the Expect-CT header field during which the user agent should regard the host of the received message as a known Expect-CT host.
 * @param settings.enforce signals to the user agent that compliance with the Certificate Transparency policy should be enforced
 * @param settings.reportUri the URI where the user agent should report Expect-CT failures.
 * @returns an object containing the Cross-Origin-Resource-Policy header
 */
export function expectCt({ maxAge = 0, enforce, reportUri }: ExpectCt) {
  const directives: string[] = [maxAgeDirective.createMaxAgeDirective(maxAge)];

  if (enforce) {
    directives.push('enforce');
  }

  if (reportUri) {
    directives.push(`report-uri="${reportUri}"`);
  }

  return {
    [HEADER_NAME]: directives.join(', '),
  };
}
