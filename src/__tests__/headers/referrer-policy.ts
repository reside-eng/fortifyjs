import { fortifyHeaders } from '../..';

describe('Referrer-Policy Tests', () => {
  it('returns defaults for Referrer-Policy when nothing is specified', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        referrerPolicy: {},
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'Referrer-Policy': 'no-referrer',
    });
  });

  it('returns no-referrer', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        referrerPolicy: {
          noReferrer: true,
        },
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'Referrer-Policy': 'no-referrer',
    });
  });

  it('returns no-referrer-when-downgrade', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        referrerPolicy: {
          noReferrerWhenDowngrade: true,
        },
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'Referrer-Policy': 'no-referrer-when-downgrade',
    });
  });

  it('returns same-origin', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        referrerPolicy: {
          sameOrigin: true,
        },
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'Referrer-Policy': 'same-origin',
    });
  });

  it('returns origin', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        referrerPolicy: {
          origin: true,
        },
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'Referrer-Policy': 'origin',
    });
  });

  it('returns strict-origin', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        referrerPolicy: {
          strictOrigin: true,
        },
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'Referrer-Policy': 'strict-origin',
    });
  });

  it('returns origin-when-cross-origin', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        referrerPolicy: {
          originWhenCrossOrigin: true,
        },
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'Referrer-Policy': 'origin-when-cross-origin',
    });
  });

  it('returns strict-origin-when-cross-origin', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        referrerPolicy: {
          strictOriginWhenCrossOrigin: true,
        },
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'Referrer-Policy': 'strict-origin-when-cross-origin',
    });
  });

  it('returns unsafe-url', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        referrerPolicy: {
          unsafeUrl: true,
        },
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'Referrer-Policy': 'unsafe-url',
    });
  });
});
