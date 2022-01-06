import { fortifyHeaders } from '../..';

describe('Cross-Origin-Resource-Policy Tests', function contentSecurityPolicyTests() {
  it('returns defaults for Cross-Origin-Resource-Policy when nothing is specified', function test() {
    const fortifiedHeaders = fortifyHeaders({
      crossOriginResourcePolicy: {},
    });

    expect(fortifiedHeaders).toEqual({
      'Cross-Origin-Resource-Policy': 'same-origin',
    });
  });
});
