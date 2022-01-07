import { fortifyHeaders } from '../..';

describe('X-Frame-Options Tests', () => {
  it('returns defaults for X-Frame-Options when nothing is specified', () => {
    const fortifiedHeaders = fortifyHeaders({
      xFrameOptions: {},
    });

    expect(fortifiedHeaders).toEqual({
      'X-Frame-Options': 'SAMEORIGIN',
    });
  });
});
