import { fortifyHeaders } from '../..';

describe('Expect-Ct Tests', () => {
  it('returns defaults for Expect-CT when nothing is specified', () => {
    const fortifiedHeaders = fortifyHeaders({
      expectCt: {},
    });

    expect(fortifiedHeaders).toEqual({
      'Expect-Ct': 'max-age=0',
    });
  });
});
