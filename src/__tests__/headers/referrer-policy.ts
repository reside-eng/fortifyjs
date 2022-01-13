import { fortifyHeaders } from '../..';

describe('Referrer-Policy Tests', () => {
  it('returns defaults for Referrer-Policy when nothing is specified', () => {
    const fortifiedHeaders = fortifyHeaders({
      referrerPolicy: {},
    });

    expect(fortifiedHeaders).toEqual({
      'Referrer-Policy': 'no-referrer',
    });
  });

  it('returns no-referrer', () => {
    const fortifiedHeaders = fortifyHeaders({
      referrerPolicy: {
        noReferrer: true,
      },
    });

    expect(fortifiedHeaders).toEqual({
      'Referrer-Policy': 'no-referrer',
    });
  });

  it('returns no-referrer-when-downgrade', () => {
    const fortifiedHeaders = fortifyHeaders({
      referrerPolicy: {
        noReferrerWhenDowngrade: true,
      },
    });

    expect(fortifiedHeaders).toEqual({
      'Referrer-Policy': 'no-referrer-when-downgrade',
    });
  });

  it('returns same-origin', () => {
    const fortifiedHeaders = fortifyHeaders({
      referrerPolicy: {
        sameOrigin: true,
      },
    });

    expect(fortifiedHeaders).toEqual({
      'Referrer-Policy': 'same-origin',
    });
  });

  it('returns origin', () => {
    const fortifiedHeaders = fortifyHeaders({
      referrerPolicy: {
        origin: true,
      },
    });

    expect(fortifiedHeaders).toEqual({
      'Referrer-Policy': 'origin',
    });
  });

  it('returns strict-origin', () => {
    const fortifiedHeaders = fortifyHeaders({
      referrerPolicy: {
        strictOrigin: true,
      },
    });

    expect(fortifiedHeaders).toEqual({
      'Referrer-Policy': 'strict-origin',
    });
  });

  it('returns origin-when-cross-origin', () => {
    const fortifiedHeaders = fortifyHeaders({
      referrerPolicy: {
        originWhenCrossOrigin: true,
      },
    });

    expect(fortifiedHeaders).toEqual({
      'Referrer-Policy': 'origin-when-cross-origin',
    });
  });

  it('returns strict-origin-when-cross-origin', () => {
    const fortifiedHeaders = fortifyHeaders({
      referrerPolicy: {
        strictOriginWhenCrossOrigin: true,
      },
    });

    expect(fortifiedHeaders).toEqual({
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    });
  });

  it('returns unsafe-url', () => {
    const fortifiedHeaders = fortifyHeaders({
      referrerPolicy: {
        unsafeUrl: true,
      },
    });

    expect(fortifiedHeaders).toEqual({
      'Referrer-Policy': 'unsafe-url',
    });
  });
});
