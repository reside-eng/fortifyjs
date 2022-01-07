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
});
