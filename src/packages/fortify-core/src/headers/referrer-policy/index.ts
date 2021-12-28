import {BasePolicyProps} from "../../types";
import {createPolicyHeader, PolicyAllowanceType} from "../../utilities/policyHeaders";

const HEADER_NAME = 'Referrer-Policy'

const policyHeader = createPolicyHeader(HEADER_NAME, {
  policies: ['no-referrer', 'no-referrer-when-downgrade', 'same-origin', 'origin', 'strict-origin', 'origin-when-cross-origin', 'strict-origin-when-cross-origin', 'unsafe-url', ''],
})

export function referrerPolicy({ policy }: BasePolicyProps) {
  policyHeader.checkForPolicy(PolicyAllowanceType.Both, policy)

  return {
    [HEADER_NAME]: policy,
  }
}
