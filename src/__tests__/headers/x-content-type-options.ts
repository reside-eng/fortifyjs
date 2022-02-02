import { fortifyHeaders } from '../..';

describe('X-Content-Type-Options Tests', () => {
  it('returns defaults for X-Content-Type-Options when nothing is specified', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        xContentTypeOptions: {},
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'X-Content-Type-Options': 'nosniff',
    });
  });

  it('returns nosniff', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        xContentTypeOptions: {
          nosniff: true,
        },
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'X-Content-Type-Options': 'nosniff',
    });
  });
});
