import { fortifyHeaders } from '../..';

describe('Cross-Origin-Opener-Policy Tests', () => {
  it('returns defaults for Cross-Origin-Opener-Policy when nothing is specified', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        crossOriginOpenerPolicy: {},
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'Cross-Origin-Opener-Policy': 'same-origin',
    });
  });

  it('returns same-origin', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        crossOriginOpenerPolicy: {
          sameOrigin: true,
        },
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'Cross-Origin-Opener-Policy': 'same-origin',
    });
  });

  it('returns same-origin-allow-popups', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        crossOriginOpenerPolicy: {
          sameOriginAllowPopups: true,
        },
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
    });
  });

  it('returns unsafe-none', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        crossOriginOpenerPolicy: {
          unsafeNone: true,
        },
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'Cross-Origin-Opener-Policy': 'unsafe-none',
    });
  });

  it('enforces single-selection', () => {
    expect(() =>
      fortifyHeaders(
        {
          crossOriginOpenerPolicy: {
            unsafeNone: true,
            sameOriginAllowPopups: true,
          },
        },
        { useDefaults: false },
      ),
    ).toThrowErrorMatchingInlineSnapshot(
      `"Cross-Origin-Opener-Policy only allows one selection. You can only specify one option for this header."`,
    );
  });
});
