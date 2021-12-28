import {maxAge} from "../../utilities/directives";
import {StrictTransportSecurity} from "./types";

const HEADER_NAME = 'Strict-Transport-Security'
const DEFAULT_MAX_AGE = 180 * 24 * 60 * 60
const maxAgeDirective = maxAge(HEADER_NAME)

export function strictTransportSecurity({ maxAge = DEFAULT_MAX_AGE, includeSubDomains, preload }: StrictTransportSecurity): string {
  const directives: string[] = [maxAgeDirective.directive(maxAge)]
  if (includeSubDomains) {
    directives.push('includeSubDomains')
  }

  if (preload) {
    directives.push('preload')
  }

  return directives.join(', ')
}
