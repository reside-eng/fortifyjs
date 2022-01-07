import { FortifyHeader } from '../headers/types';

/**
 * @function applyDefaultsIfNecessary applies a given set of default properties to header setting of T
 * @param settings the header settings
 * @param defaults the defaults for the header if the setting is not present
 * @returns settings original or default object
 */
export function applyDefaultsIfNecessary<Type extends FortifyHeader>(
  settings: Type,
  defaults: Type,
) {
  const isEmptyObject = !Object.keys(settings).length;
  if (!settings || isEmptyObject) {
    return defaults;
  }

  return settings;
}
