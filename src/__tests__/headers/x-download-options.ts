import { fortifyHeaders } from '../..';

describe('X-Download-Options Tests', () => {
  it('returns defaults for X-Download-Options when nothing is specified', () => {
    const fortifiedHeaders = fortifyHeaders({
      xDownloadOptions: {},
    });

    expect(fortifiedHeaders).toEqual({
      'X-Download-Options': 'noopen',
    });
  });
});
