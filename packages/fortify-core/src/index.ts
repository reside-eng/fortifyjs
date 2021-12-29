import { FortifySettings } from './types';
import { camelcaseToKebab } from './directives/normalize';

const supportedHeaders = new Set([
  'content-security-policy',
  'cross-origin-embedder-policy',
  'cross-origin-opener-policy',
  'cross-origin-resource-policy',
  'expect-ct',
  'origin-agent-cluster',
  'referrer-policy',
  'strict-transport-policy',
  'x-content-type-options',
  'x-dns-prefetch-control',
  'x-download-options',
  'x-frame-options',
  'x-permitted-cross-domain-policies',
  'x-powered-by',
]);

/**
 * @function fortifyHeaders is the primary entrypoint for generating HTTP security headers
 * @param config represents the primary configuration for FortifyJS
 * @returns an object representing the desired HTTP security header configuration
 */
export function fortifyHeaders(config: FortifySettings) {
  const result = Object.entries(config).map(function mapConfigToHeader([
    directiveName,
    directiveValues,
  ]) {
    const headerName = camelcaseToKebab(directiveName);
    const validHeader = supportedHeaders.has(headerName);
    if (!validHeader) {
      throw new Error(`${headerName} is not a supported header`);
    }
    const headerLib = import(`./${headerName}`);
    const headerResult = headerLib[headerName](directiveValues);
    return [headerName, headerResult];
  });
  return Object.fromEntries(result);
}
