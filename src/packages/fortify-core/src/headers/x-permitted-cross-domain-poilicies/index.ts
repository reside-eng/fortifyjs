import {BasePolicyProps} from "../../types";
import {createPolicyHeader, PolicyAllowanceType} from "../../utilities/policyHeaders";

const HEADER_NAME = 'X-Permitted-Cross-Domain-Policies'

const policyHeader = createPolicyHeader(HEADER_NAME, {
  policies: [ 'none', 'master-only', 'by-content-type', 'all' ]
})

export function xPermittedCrossDomainPolicies({ policy }: BasePolicyProps) {
  policyHeader.checkForPolicy(PolicyAllowanceType.One, policy)

  return {
    [HEADER_NAME]: policy,
  }
}
