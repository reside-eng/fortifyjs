import {maxAge} from "../../utilities/directives"
import {ExpectCt} from "./types"

const HEADER_NAME = 'Expect-CT'
const maxAgeDirective = maxAge(HEADER_NAME)

export function expectCt({ maxAge = 0, enforce, reportUri }: ExpectCt) {
  const directives: string[] = [maxAgeDirective.directive(maxAge)]

  if (enforce) {
    directives.push('enforce')
  }

  if (reportUri) {
    directives.push(`report-uri="${reportUri}"`)
  }

  return {
    [HEADER_NAME]: directives.join(', ')
  }
}
