import { fortifyHeaders } from '../..';

describe('X-Download-Options Tests', function contentSecurityPolicyTests() {
  it('returns defaults for X-Download-Options when nothing is specified', function test() {
    const fortifiedHeaders = fortifyHeaders({
      xDownloadOptions: {},
    });

    expect(fortifiedHeaders).toEqual({
      'X-Download-Options': 'noopen',
    });
  });
});
