import { fortifyHeaders } from '../..';

describe('Content-Security-Policy Tests', () => {
  it('returns defaults for Content-Security-Policy when nothing is specified', () => {
    const fortifiedHeaders = fortifyHeaders({
      contentSecurityPolicy: {},
    });

    expect(fortifiedHeaders).toEqual({
      'Content-Security-Policy':
        "default-src 'self'; base-uri 'self'; font-src 'self' https: data:; frame-ancestors 'self'; img-src 'self' data:; object-src 'none'; script-src 'self'; script-src-attr 'none'; style-src 'self' https: 'unsafe-inline'; upgrade-insecure-requests",
    });
  });

  it('returns the header as specified', () => {
    const fortifiedHeaders = fortifyHeaders({
      contentSecurityPolicy: {
        defaultSrc: ["'self'", 'https://'],
        upgradeInsecureRequests: false,
      },
    });

    expect(fortifiedHeaders).toEqual({
      'Content-Security-Policy': "default-src 'self' https://",
    });
  });
});
