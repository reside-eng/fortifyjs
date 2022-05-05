import { FortifyHeader } from '../types';

/**
 * Represents the user-specified header configuration for Cross-Origin-Embedder-Policy
 * see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy
 */
export type CrossOriginEmbedderPolicy = FortifyHeader & {
  /**
   * A document can only load resources from the same origin, or resources explicitly marked as loadable from another origin. If a cross origin resource supports CORS, the crossorigin attribute or the Cross-Origin-Resource-Policy header must be used to load it without being blocked by COEP.
   */
  requireCorp?: boolean;
  /**
   * Allows the document to fetch cross-origin resources without giving explicit permission through the CORS protocol or the Cross-Origin-Resource-Policy header.
   */
  unsafeNone?: boolean;
  /**
   * Test for google
   */
  credentialless?: boolean;
};
