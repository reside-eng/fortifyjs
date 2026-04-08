import { applyDefaultsIfNecessary } from '../../directives/defaults';
import type { XRobotsTag } from './types';

const HEADER_NAME = 'X-Robots-Tag';

const ALLOWED_DIRECTIVES = new Set([
  'noindex',
  'nofollow',
  'nosnippet',
  'noarchive',
  'noimageindex',
  'notranslate',
]);

/**
 * Generates the X-Robots-Tag header and returns it in an object to the caller.
 * Defaults to noindex, nofollow, nosnippet, noarchive.
 */
export function xRobotsTag(settings: XRobotsTag) {
  const headerConfig = applyDefaultsIfNecessary(settings, {
    noindex: true,
    nofollow: true,
    nosnippet: true,
    noarchive: true,
  });

  const directives = Object.entries(headerConfig)
    .filter(([key, value]) => {
      if (!ALLOWED_DIRECTIVES.has(key)) {
        throw new Error(
          `${HEADER_NAME} does not support "${key}". It is not in the specification.`,
        );
      }
      return value === true;
    })
    .map(([key]) => key);

  return {
    [HEADER_NAME]: directives.join(', '),
  };
}
