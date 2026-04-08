import type { FortifyHeader } from '../types';

/**
 * Represents the user-specified header configuration for X-Robots-Tag
 * see: https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#xrobotstag
 */
export type XRobotsTag = FortifyHeader & {
  /**
   * Do not show this page in search results
   */
  noindex?: boolean;
  /**
   * Do not follow the links on this page
   */
  nofollow?: boolean;
  /**
   * Do not show a text snippet or video preview in search results. A static image thumbnail may still be visible.
   */
  nosnippet?: boolean;
  /**
   * Do not show a cached link in search results
   */
  noarchive?: boolean;
  /**
   * Do not index images on this page
   */
  noimageindex?: boolean;
  /**
   * Do not offer translation of this page in search results
   */
  notranslate?: boolean;
};
