import { FortifyHeader } from '../types';

/**
 * Represents the user-specified header configuration for X-Download-Options
 * see: https://www.nwebsec.com/HttpHeaders/SecurityHeaders/XDownloadOptions#:~:text=The%20X%2DDownload%2DOptions%20is,context%20of%20the%20web%20site.
 */
export type XDownloadOptions = FortifyHeader & {
  /**
   * Instruct IE8 to not open a download directly but to show a Save dialog
   */
  noopen?: boolean;
};
