import { fortifyHeaders } from '../..';

describe('Cross-Origin-Resource-Policy Tests', () => {
  it('returns defaults for Cross-Origin-Resource-Policy when nothing is specified', () => {
    const fortifiedHeaders = fortifyHeaders({
      crossOriginResourcePolicy: {},
    });

    expect(fortifiedHeaders).toEqual({
      'Cross-Origin-Resource-Policy': 'same-origin',
    });
  });

  it('returns same-origin', () => {
    const fortifiedHeaders = fortifyHeaders({
      crossOriginResourcePolicy: {
        sameOrigin: true,
      },
    });

    expect(fortifiedHeaders).toEqual({
      'Cross-Origin-Resource-Policy': 'same-origin',
    });
  });

  it('returns same-site', () => {
    const fortifiedHeaders = fortifyHeaders({
      crossOriginResourcePolicy: {
        sameSite: true,
      },
    });

    expect(fortifiedHeaders).toEqual({
      'Cross-Origin-Resource-Policy': 'same-site',
    });
  });

  it('returns cross-origin', () => {
    const fortifiedHeaders = fortifyHeaders({
      crossOriginResourcePolicy: {
        crossOrigin: true,
      },
    });

    expect(fortifiedHeaders).toEqual({
      'Cross-Origin-Resource-Policy': 'cross-origin',
    });
  });

  it('enforce single-selection', () => {
    expect(() =>
      fortifyHeaders({
        crossOriginResourcePolicy: {
          crossOrigin: true,
          sameSite: true,
        },
      }),
    ).toThrowErrorMatchingInlineSnapshot(
      `"Cross-Origin-Resource-Policy only allows one selection. You can only specify one option for this header."`,
    );
  });
});
