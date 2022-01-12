import { FortifyHeader } from '../types';

/**
 * Represents the user-specified header configuration for X-Content-Type-Options
 * see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
 */
export interface XContentTypeOotions extends FortifyHeader {
  /**
   * Blocks a request if the request destination is of type style and the MIME type is not text/css, or of type script and the MIME type is not a JavaScript MIME type
   */
  nosniff?: boolean;
}
