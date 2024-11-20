import type { FortifyHeader } from '../types';

/**
 * Represents the user-specified header configuration for Referrer-Policy
 * see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
 */
export type ReferrerPolicy = FortifyHeader & {
  /**
   * The Referer header will be omitted: sent requests do not include any referrer information.
   */
  noReferrer?: boolean;
  /**
   * Send the origin, path, and querystring in Referer when the protocol security level stays the same or improves (HTTP→HTTP, HTTP→HTTPS, HTTPS→HTTPS). Don't send the Referer header for requests to less secure destinations (HTTPS→HTTP, HTTPS→file).
   */
  noReferrerWhenDowngrade?: boolean;
  /**
   * Send the origin, path, and query string for same-origin requests. Don't send the Referer header for cross-origin requests.
   */
  sameOrigin?: boolean;
  /**
   * Send only the origin in the Referer header. For example, a document at https://example.com/page.html will send the referrer https://example.com/.
   */
  origin?: boolean;
  /**
   * Send only the origin when the protocol security level stays the same (HTTPS→HTTPS). Don't send the Referer header to less secure destinations (HTTPS→HTTP).
   */
  strictOrigin?: boolean;
  /**
   * When performing a same-origin request to the same protocol level (HTTP→HTTP, HTTPS→HTTPS), send the origin, path, and query string . Send only the origin for cross origin requests and requests to less secure destinations (HTTPS→HTTP).
   */
  originWhenCrossOrigin?: boolean;
  /**
   * Send the origin, path, and querystring when performing a same-origin request. For cross-origin requests send the origin (only) when the protocol security level stays same (HTTPS→HTTPS). Don't send the Referer header to less secure destinations (HTTPS→HTTP).
   */
  strictOriginWhenCrossOrigin?: boolean;
  /**
   * Send the origin, path, and query string when performing any request, regardless of security.
   */
  unsafeUrl?: boolean;
};
