import { fortifyHeaders } from '../..';

describe('X-Permitted-Cross-Domain-Policies Tests', function contentSecurityPolicyTests() {
  it('returns defaults for X-Permitted-Cross-Domain-Policies when nothing is specified', function test() {
    const fortifiedHeaders = fortifyHeaders({
      xPermittedCrossDomainPolicies: {},
    });

    expect(fortifiedHeaders).toEqual({
      'X-Permitted-Cross-Domain-Policies': 'none',
    });
  });
});
