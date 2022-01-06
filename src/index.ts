import { FortifySettings } from './types';
import { toHeaderCasing } from './directives/normalize';
import { getAllHeaders } from './headers';
import { HeaderFunction } from './headers/types';

/**
 * getDefaultConfiguration.
 *
 * @param {Record} availableHeaders
 * @returns {FortifySettings}
 */
function getDefaultConfiguration(
  availableHeaders: Record<string, HeaderFunction>,
): FortifySettings {
  const defaults: Record<string, object> = {};
  const headerKeys = Object.keys(availableHeaders);
  headerKeys.forEach(function getDefaultValue(keyName) {
    defaults[keyName] = {};
  });
  return defaults;
}

/**
 * getConfig.
 *
 * @param {Record} availableHeaders
 * @param {FortifySettings} config
 * @returns {FortifySettings}
 */
function getConfig(
  availableHeaders: Record<string, HeaderFunction>,
  config: FortifySettings,
): FortifySettings {
  if (Object.keys(config).length === 0) {
    return getDefaultConfiguration(availableHeaders);
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
  const result = Object.entries(headerConfig).map(function mapConfigToHeader([
    directiveName,
    directiveValues,
  ]) {
    const headerName = toHeaderCasing(directiveName);
    const headerFactory = availableHeaders[directiveName];
    if (!headerFactory) {
      throw new Error(`${directiveName} is not a supported header`);
    }
    const headerResult = headerFactory(directiveValues);
    return [headerName, headerResult[headerName]];
  });

  return Object.fromEntries(result);
}
