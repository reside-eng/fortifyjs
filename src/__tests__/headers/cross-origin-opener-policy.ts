import { fortifyHeaders } from '../..';

describe('Cross-Origin-Opener-Policy Tests', function contentSecurityPolicyTests() {
  it('returns defaults for Cross-Origin-Opener-Policy when nothing is specified', function test() {
    const fortifiedHeaders = fortifyHeaders({
      crossOriginOpenerPolicy: {},
    });

    expect(fortifiedHeaders).toEqual({
      'Cross-Origin-Opener-Policy': 'same-origin',
    });
  });
});
