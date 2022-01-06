import { fortifyHeaders } from '../..';

describe('Referrer-Policy Tests', function contentSecurityPolicyTests() {
  it('returns defaults for Referrer-Policy when nothing is specified', function test() {
    const fortifiedHeaders = fortifyHeaders({
      referrerPolicy: {},
    });

    expect(fortifiedHeaders).toEqual({
      'Referrer-Policy': 'no-referrer',
    });
  });
});
