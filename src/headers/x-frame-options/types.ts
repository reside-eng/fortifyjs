import { FortifyHeader } from '../types';

/**
 * Represents the user-specified header configuration for X-Frame-Options
 * see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
 */
export interface XFrameOptions extends FortifyHeader {
  /**
   * The page can only be displayed in a frame on the same origin as the page itself. The spec leaves it up to browser vendors to decide whether this option applies to the top level, the parent, or the whole chain, although it is argued that the option is not very useful unless all ancestors are also in the same origin
   */
  sameorigin?: boolean;
  /**
   * The page cannot be displayed in a frame, regardless of the site attempting to do so.
   */
  deny?: boolean;
}
