import { directiveValidation } from '../../directives/validation';

const HEADER_NAME = 'X-Download-Options';

const validation = directiveValidation(HEADER_NAME, {
  allowedDirectives: ['noopen'],
});

/**
 * @function xDownloadOptions generates the X-Download-Options header and returns it in an object to the caller. (Not in HTTP Spec / Specific to IE8 Security)
 * @param directive represents the options set to the header value: valid options are 'noopen'
 * @returns an object containing the Referrer-Policy header
 */
export function xDownloadOptions(directive = 'noopen') {
  validation.checkForValidity(directive);

  return {
    [HEADER_NAME]: directive,
  };
}
