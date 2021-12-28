import {BasePolicyProps} from "../../types"
import { createPolicyHeader, PolicyAllowanceType } from "../../utilities/policyHeaders"

const HEADER_NAME = 'Cross-Origin-Embedder-Policy'

const policyHeader = createPolicyHeader(HEADER_NAME, {
  policies: ['require-corp'],
})
export function crossOriginEmbedderPolicy({ policy = 'require-corp' }: BasePolicyProps) {
  policyHeader.checkForPolicy(PolicyAllowanceType.One, policy)

  return {
    [HEADER_NAME]: policy,
  }
}
