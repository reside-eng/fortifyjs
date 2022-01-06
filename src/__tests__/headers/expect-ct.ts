import { fortifyHeaders } from '../..';

describe('Expect-Ct Tests', function contentSecurityPolicyTests() {
  it('returns defaults for Expect-CT when nothing is specified', function test() {
    const fortifiedHeaders = fortifyHeaders({
      expectCt: {},
    });

    expect(fortifiedHeaders).toEqual({
      'Expect-Ct': 'max-age=0',
    });
  });
});
