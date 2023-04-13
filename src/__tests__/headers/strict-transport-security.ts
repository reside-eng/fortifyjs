import { fortifyHeaders } from '../..';

describe('Strict-Transport-Security Tests', () => {
  it('returns defaults for Strict-Transport-Security when nothing is specified', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        strictTransportSecurity: {},
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'Strict-Transport-Security': 'max-age=31536000',
    });
  });
});
