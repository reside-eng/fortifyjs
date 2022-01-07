import { FortifySettings } from './types';
import { toHeaderCasing } from './directives/normalize';
import { getAllHeaders } from './headers';
import { HeaderFunction } from './headers/types';

/**
 * @function getConfig builds out a configuration that will generate the defaults. Defaults are generated
 * by passing into an empty object for a header. This autogenerates the empty object literal for every header.
 * @param availableHeaders represents the available headers to fortify
 * @param config represents the user-specified config initializing FortifyJS
 * @returns an object representing empty header configurations
 */
function getConfig(
  availableHeaders: Record<string, HeaderFunction>,
  config: FortifySettings,
): FortifySettings {
  if (Object.keys(config).length === 0) {
    const defaults: Record<string, object> = {};
    const headerKeys = Object.keys(availableHeaders);
    headerKeys.forEach((keyName) => {
      defaults[keyName] = {};
    });
    return defaults;
  }
  return config;
}

/**
 * @function fortifyHeaders is the primary entrypoint for generating HTTP security headers
 * @param config represents the primary configuration for FortifyJS
 * @returns an object representing the desired HTTP security header configuration
 */
export function fortifyHeaders(config: FortifySettings) {
  const availableHeaders = getAllHeaders();
  const headerConfig = getConfig(availableHeaders, config);
  const result = Object.entries(headerConfig).map(
    ([directiveName, directiveValues]) => {
      const headerName = toHeaderCasing(directiveName);
      const headerFactory = availableHeaders[directiveName];
      if (!headerFactory) {
        throw new Error(`${directiveName} is not a supported header`);
      }
      const headerResult = headerFactory(directiveValues);
      return [headerName, headerResult[headerName]];
    },
  );

  return Object.fromEntries(result);
}
