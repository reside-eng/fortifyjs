export enum PolicyAllowanceType {
  One = 'ONE',
  Many = 'MANY',
  Both = 'BOTH',
}


export function createPolicyHeader (headerName: string, { policies }) {
  const ALLOWED_POLICIES = new Set(policies)

  // TODO work out types later
  const policyChecks: unknown = {
    [PolicyAllowanceType.One]: checkforAllowOneToken,
    [PolicyAllowanceType.Many]: checkForAllowMultipleTokens,
    [PolicyAllowanceType.Both]: checkForTokens,
  }

  if (!Array.isArray(policies)) {
    throw new Error(
      `Policies for ${headerName} must be an array. ${policies} is invalid`
    )
  }

  function checkforAllowOneToken(policy: string): string {
    if (!ALLOWED_POLICIES.has(policy)) {
      throw new Error(
        `${headerName} does not support the ${JSON.stringify(
          policy
        )} policy`
      );
    }

    return policy
  }

  function checkForTokens(policyTokens: string[] | string): string {
    const tokens = typeof policyTokens === 'string'
      ? [policyTokens]
      : policyTokens

    return checkForAllowMultipleTokens(tokens)
  }

  function checkForAllowMultipleTokens(policyTokens: string[]) {
    if (policyTokens.length === 0) {
      throw new Error(
        `${headerName} received an unexpected policy tokens`
      )
    }

    const tokens = (policyTokens as string[]).map((token) => {
      checkforAllowOneToken(token)

      return token
    })

    return tokens.join(', ')
  }


  function checkForPolicy(policyType: PolicyAllowanceType, policy: string[] | string) {
    const checkPolicyConfiguration = policyChecks[policyType]
    if (!checkPolicyConfiguration) {
      throw new Error(
        `Invalid PolicyAllowanceType ${JSON.stringify(policyType)}`
      )
    }

    checkPolicyConfiguration(policy)

    return policy
  }

  return { checkForPolicy }
}
