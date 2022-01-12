import { fortifyHeaders } from '..';

describe('fortify-core entrypoint tests', () => {
  describe('default state', () => {
    it('gets all defaults when initialized to an empty config', () => {
      const fortifiedHeaders = fortifyHeaders({});

      expect(fortifiedHeaders).toEqual({
        'Content-Security-Policy':
          "default-src 'self'; base-uri 'self'; font-src 'self' https: data:; frame-ancestors 'self'; img-src 'self' data:; object-src 'none'; script-src 'self'; script-src-attr 'none'; style-src 'self' https: 'unsafe-inline'; upgrade-insecure-requests",
        'Cross-Origin-Embedder-Policy': 'require-corp',
        'Cross-Origin-Opener-Policy': 'same-origin',
        'Cross-Origin-Resource-Policy': 'same-origin',
        'Expect-Ct': 'max-age=0',
        'Origin-Agent-Cluster': '?1',
        'Referrer-Policy': 'no-referrer',
        'Strict-Transport-Security': 'max-age=15552000',
        'X-Content-Type-Options': 'nosniff',
        'X-Dns-Prefetch-Control': 'off',
        'X-Download-Options': 'noopen',
        'X-Frame-Options': 'SAMEORIGIN',
        'X-Permitted-Cross-Domain-Policies': 'none',
      });
    });

    it('customizes some properties and defaults others', () => {
      const fortifiedHeaders = fortifyHeaders({
        contentSecurityPolicy: {},
        crossOriginOpenerPolicy: {
          unsafeNone: true,
        },
        strictTransportSecurity: {
          includeSubDomains: true,
          maxAge: 6000000,
        },
      });

      expect(fortifiedHeaders).toEqual({
        'Content-Security-Policy':
          "default-src 'self'; base-uri 'self'; font-src 'self' https: data:; frame-ancestors 'self'; img-src 'self' data:; object-src 'none'; script-src 'self'; script-src-attr 'none'; style-src 'self' https: 'unsafe-inline'; upgrade-insecure-requests",
        'Cross-Origin-Opener-Policy': 'unsafe-none',
        'Strict-Transport-Security': 'includeSubDomains; max-age=6000000',
      });
    });
  });

  describe('failed-states', () => {
    it('throws when a property is on config that does not map to a header', () => {
      // potential untyped JavaScript consumption
      expect(() =>
        fortifyHeaders({ unknownHeader: ['SAMEORIGIN'] } as any),
      ).toThrowErrorMatchingInlineSnapshot(
        `"unknownHeader is not a supported header"`,
      );
    });
  });
});
