import {BasePolicyProps} from '../../types';
import { createPolicyHeader, PolicyAllowanceType } from '../../utilities/policyHeaders'
const HEADER_NAME = 'Cross-Origin-Opener-Policy';

const policyHeader = createPolicyHeader(HEADER_NAME, {
  policies: [
    'same-origin',
    'same-origin-allow-popups',
    'unsafe-none',
  ],
})

export function crossOriginOpenerPolicy({ policy = 'same-origin' }: BasePolicyProps) {
  policyHeader.checkForPolicy(PolicyAllowanceType.One, policy)

  return {
    [HEADER_NAME]: policy
  }
}
