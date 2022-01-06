import { fortifyHeaders } from '../..';

describe('Strict-Transport-Security Tests', function contentSecurityPolicyTests() {
  it('returns defaults for Strict-Transport-Security when nothing is specified', function test() {
    const fortifiedHeaders = fortifyHeaders({
      strictTransportSecurity: {},
    });

    expect(fortifiedHeaders).toEqual({
      'Strict-Transport-Security': 'max-age=15552000',
    });
  });
});
