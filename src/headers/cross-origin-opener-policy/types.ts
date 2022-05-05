import { FortifyHeader } from '../types';

/**
 * Represents the user-specified header configuration for Cross-Origin-Opener-Policy
 * see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy
 */
export type CrossOriginOpenerPolicy = FortifyHeader & {
  /**
   * Isolates the browsing context exclusively to same-origin documents. Cross-origin documents are not loaded in the same browsing context.
   */
  sameOrigin?: boolean;
  /**
   * Retains references to newly opened windows or tabs which either don't set COOP or which opt out of isolation by setting a COOP of unsafe-none.
   */
  sameOriginAllowPopups?: boolean;
  /**
   * Allows the document to be added to its opener's browsing context group unless the opener itself has a COOP of same-origin or same-origin-allow-popups.
   */
  unsafeNone?: boolean;
};
