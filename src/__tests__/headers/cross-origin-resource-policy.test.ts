import { describe, expect, it } from 'vitest';
import { fortifyHeaders } from '../..';

describe('Cross-Origin-Resource-Policy Tests', () => {
  it('returns defaults for Cross-Origin-Resource-Policy when nothing is specified', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        crossOriginResourcePolicy: {},
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'Cross-Origin-Resource-Policy': 'same-origin',
    });
  });

  it('returns same-origin', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        crossOriginResourcePolicy: {
          sameOrigin: true,
        },
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'Cross-Origin-Resource-Policy': 'same-origin',
    });
  });

  it('returns same-site', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        crossOriginResourcePolicy: {
          sameSite: true,
        },
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'Cross-Origin-Resource-Policy': 'same-site',
    });
  });

  it('returns cross-origin', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        crossOriginResourcePolicy: {
          crossOrigin: true,
        },
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'Cross-Origin-Resource-Policy': 'cross-origin',
    });
  });

  it('enforce single-selection', () => {
    expect(() =>
      fortifyHeaders(
        {
          crossOriginResourcePolicy: {
            crossOrigin: true,
            sameSite: true,
          },
        },
        { useDefaults: false },
      ),
    ).toThrowErrorMatchingInlineSnapshot(
      '[Error: Cross-Origin-Resource-Policy only allows one selection. You can only specify one option for this header.]',
    );
  });
});
