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

  it('exercise full configuration', () => {
    const fortifiedHeaders = fortifyHeaders({
      expectCt: {
        enforce: true,
        maxAge: 1000,
        reportUri: 'report-endpoint/',
      },
    });

    expect(fortifiedHeaders).toEqual({
      'Expect-Ct': 'enforce; max-age=1000; report-uri=report-endpoint/',
    });
  });
});