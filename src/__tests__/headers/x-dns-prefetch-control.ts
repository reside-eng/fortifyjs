import { fortifyHeaders } from '../..';

describe('X-DNS-Prefetch-Control Tests', () => {
  it('returns defaults for X-DNS-Prefetch-Control when nothing is specified', () => {
    const fortifiedHeaders = fortifyHeaders({
      xDnsPrefetchControl: {},
    });

    expect(fortifiedHeaders).toEqual({
      'X-Dns-Prefetch-Control': 'off',
    });
  });
});
