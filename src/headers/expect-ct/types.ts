import { type FortifyHeader } from '../types';

/**
 * Represents the user-specified header configuration for Expect-CT
 * see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect-CT
 */
export type ExpectCt = FortifyHeader & {
  /**
   * The number of seconds after reception of the Expect-CT header field during which the user agent should regard the host of the received message as a known Expect-CT host.
   */
  maxAge?: number;
  /**
   * Signals to the user agent that compliance with the Certificate Transparency policy should be enforced (rather than only reporting compliance) and that the user agent should refuse future connections that violate its Certificate Transparency policy.
   */
  enforce?: boolean;
  /**
   * The URI where the user agent should report Expect-CT failures.
   */
  reportUri?: string;
};
