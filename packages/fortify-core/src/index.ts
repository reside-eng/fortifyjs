import { FortifySettings } from './types';
import { camelcaseToKebab } from './directives/normalize';
import { getAllHeaders } from './headers';

/**
 * @function fortifyHeaders is the primary entrypoint for generating HTTP security headers
 * @param config represents the primary configuration for FortifyJS
 * @returns an object representing the desired HTTP security header configuration
 */
export async function fortifyHeaders(config: FortifySettings) {
  const availableHeaders = getAllHeaders();
  const result = Object.entries(config).map(function mapConfigToHeader([
    directiveName,
    directiveValues,
  ]) {
    const headerName = camelcaseToKebab(directiveName);
    const headerFactory = availableHeaders[directiveName];
    if (!headerFactory) {
      throw new Error(`${directiveName} is not a supported header`);
    }
    const headerResult = headerFactory(directiveValues);
    return [headerName, headerResult];
  });
  return Object.fromEntries(result);
}

