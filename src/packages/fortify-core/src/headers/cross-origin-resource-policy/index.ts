import { createPolicyHeader, PolicyAllowanceType } from "../../utilities/policyHeaders"

const HEADER_NAME = 'Cross-Origin-Resource-Policy'

const policyHeader = createPolicyHeader(HEADER_NAME, {
  policies: ['same-origin', 'same-site', 'cross-origin'],
})

export function crossOriginResourcePolicy(policy: string) {
  policyHeader.checkForPolicy(PolicyAllowanceType.One, policy)

  return {
    [HEADER_NAME]: policy
  }
}
