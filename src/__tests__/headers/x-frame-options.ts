import { fortifyHeaders } from '../..';

describe('X-Frame-Options Tests', function contentSecurityPolicyTests() {
  it('returns defaults for X-Frame-Options when nothing is specified', function test() {
    const fortifiedHeaders = fortifyHeaders({
      xFrameOptions: {},
    });

    expect(fortifiedHeaders).toEqual({
      'X-Frame-Options': 'SAMEORIGIN',
    });
  });
});
