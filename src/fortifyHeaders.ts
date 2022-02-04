import { FortifyHeaders, FortifySettings, GenerationOptions } from './types';
import { toHeaderCasing } from './directives/normalize';
import { getAllHeaders } from './headers';
import { HeaderFunction } from './headers/types';

/**
 * Builds out a configuration that will generate the defaults. Defaults are generated
 * by passing into an empty object for a header. This autogenerates the empty object literal for every header.
 */
function getConfig(
  availableHeaders: Record<string, HeaderFunction>,
  config: FortifySettings,
): FortifySettings {
  return Object.keys(availableHeaders).reduce<FortifySettings>(
    (acc: FortifySettings, cur: string) => {
      const configValue = config[cur];
      if (typeof configValue === 'undefined' || configValue === null) {
        acc[cur] = {};
      } else {
        acc[cur] = config[cur];
      }
      return acc;
    },
    {},
  );
}

/**
 * The primary entrypoint for generating HTTP security headers
 */
export function fortifyHeaders(
  settings: FortifySettings = {},
  options: GenerationOptions = { useDefaults: false },
): FortifyHeaders {
  const availableHeaders = getAllHeaders();
  const isEmpty = !Object.keys(settings).length;
  const headerConfig =
    options.useDefaults || isEmpty
      ? getConfig(availableHeaders, settings)
      : settings;
  return Object.keys(headerConfig).reduce<FortifyHeaders>(
    (acc: FortifyHeaders, cur) => {
      const directiveValues = headerConfig[cur];
      if (directiveValues === false) {
        return acc;
      }

      const headerName = toHeaderCasing(cur);
      const headerFactory: HeaderFunction = availableHeaders[cur];
      if (!headerFactory) {
        throw new Error(`${cur} is not a supported header`);
      }
      const headerResult = headerFactory(directiveValues);
      acc[headerName] = headerResult[headerName];
      return acc;
    },
    {},
  );
}
