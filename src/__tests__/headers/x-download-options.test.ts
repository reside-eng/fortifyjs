import { describe, it, expect } from 'vitest';
import { fortifyHeaders } from '../..';

describe('X-Download-Options Tests', () => {
  it('returns defaults for X-Download-Options when nothing is specified', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        xDownloadOptions: {},
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'X-Download-Options': 'noopen',
    });
  });

  it('returns noopen', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        xDownloadOptions: {
          noopen: true,
        },
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'X-Download-Options': 'noopen',
    });
  });
});
