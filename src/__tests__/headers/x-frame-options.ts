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

  it('returns SAMEORIGIN', () => {
    const fortifiedHeaders = fortifyHeaders({
      xFrameOptions: {
        sameorigin: true,
      },
    });

    expect(fortifiedHeaders).toEqual({
      'X-Frame-Options': 'SAMEORIGIN',
    });
  });

  it('returns DENY', () => {
    const fortifiedHeaders = fortifyHeaders({
      xFrameOptions: {
        deny: true,
      },
    });

    expect(fortifiedHeaders).toEqual({
      'X-Frame-Options': 'DENY',
    });
  });

  it('returns DENY', () => {
    const fortifiedHeaders = fortifyHeaders({
      xFrameOptions: {
        deny: true,
      },
    });

    expect(fortifiedHeaders).toEqual({
      'X-Frame-Options': 'DENY',
    });
  });

  it('enforces single-selection', () => {
    expect(() =>
      fortifyHeaders({
        xFrameOptions: {
          deny: true,
          sameorigin: true,
        },
      }),
    ).toThrowErrorMatchingInlineSnapshot(
      `"X-Frame-Options only allows one selection. You can only specify one option for this header."`,
    );
  });
});
