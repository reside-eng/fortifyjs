import { fortifyHeaders } from '../..';

describe('X-Content-Type-Options Tests', function contentSecurityPolicyTests() {
  it('returns defaults for X-Content-Type-Options when nothing is specified', function test() {
    const fortifiedHeaders = fortifyHeaders({
      xContentTypeOptions: {},
    });

    expect(fortifiedHeaders).toEqual({
      'X-Content-Type-Options': 'nosniff',
    });
  });
});
