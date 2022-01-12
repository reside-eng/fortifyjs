import { FortifyHeader } from '../headers/types';

/**
 * Applies a given set of default properties to header setting of T
 */
export function applyDefaultsIfNecessary<Config extends FortifyHeader>(
  settings: Config,
  defaults: Config,
) {
  const isEmptyObject = !Object.keys(settings).length;
  if (!settings || isEmptyObject) {
    return defaults;
  }

  return settings;
}
