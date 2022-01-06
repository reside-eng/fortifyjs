import { fortifyHeaders } from '..';

describe('fortify-core entrypoint tests', function fortifyCoreEntrypointTests() {
  describe('out-of-the-box defaults', function outOfTheBoxDefaults() {
    it('returns defaults for Content-Security-Policy when nothing is specified', function test() {
      const fortifiedHeaders = fortifyHeaders({
        contentSecurityPolicy: {},
      });

      expect(fortifiedHeaders).toEqual({
        'Content-Security-Policy':
          "default-src 'self'; base-uri 'self'; font-src 'self' https: data:; frame-ancestors 'self'; img-src 'self' data:; object-src 'none'; script-src 'self'; script-src-attr 'none'; style-src 'self' https: 'unsafe-inline'; upgrade-insecure-requests",
      });
    });

    it('returns defaults for Cross-Origin-Embedder-Policy when nothing is specified', function test() {
      const fortifiedHeaders = fortifyHeaders({
        crossOriginEmbedderPolicy: {},
      });

      expect(fortifiedHeaders).toEqual({
        'Cross-Origin-Embedder-Policy': 'require-corp',
      });
    });

    it('returns defaults for Cross-Origin-Resource-Policy when nothing is specified', function test() {
      const fortifiedHeaders = fortifyHeaders({
        crossOriginResourcePolicy: {},
      });

      expect(fortifiedHeaders).toEqual({
        'Cross-Origin-Resource-Policy': 'same-origin',
      });
    });

    it('returns defaults for Expect-CT when nothing is specified', function test() {
      const fortifiedHeaders = fortifyHeaders({
        expectCt: {},
      });

      expect(fortifiedHeaders).toEqual({
        'Expect-Ct': 'max-age=0',
      });
    });

    it('returns defaults for Origin-Agent-Cluster when nothing is specified', function test() {
      const fortifiedHeaders = fortifyHeaders({
        originAgentCluster: {},
      });

      expect(fortifiedHeaders).toEqual({
        'Origin-Agent-Cluster': '?1',
      });
    });

    it('returns defaults for Referrer-Policy when nothing is specified', function test() {
      const fortifiedHeaders = fortifyHeaders({
        referrerPolicy: {},
      });

      expect(fortifiedHeaders).toEqual({
        'Referrer-Policy': 'no-referrer',
      });
    });

    it('returns defaults for Strict-Transport-Security when nothing is specified', function test() {
      const fortifiedHeaders = fortifyHeaders({
        strictTransportSecurity: {},
      });

      expect(fortifiedHeaders).toEqual({
        'Strict-Transport-Security': 'max-age=15552000',
      });
    });

    it('returns defaults for X-Content-Type-Options when nothing is specified', function test() {
      const fortifiedHeaders = fortifyHeaders({
        xContentTypeOptions: {},
      });

      expect(fortifiedHeaders).toEqual({
        'X-Content-Type-Options': 'nosniff',
      });
    });

    it('returns defaults for X-DNS-Prefetch-Control when nothing is specified', function test() {
      const fortifiedHeaders = fortifyHeaders({
        xDnsPrefetchControl: {},
      });

      expect(fortifiedHeaders).toEqual({
        'X-Dns-Prefetch-Control': 'off',
      });
    });

    it('returns defaults for X-Download-Options when nothing is specified', function test() {
      const fortifiedHeaders = fortifyHeaders({
        xDownloadOptions: {},
      });

      expect(fortifiedHeaders).toEqual({
        'X-Download-Options': 'noopen',
      });
    });

    it('returns defaults for X-Frame-Options when nothing is specified', function test() {
      const fortifiedHeaders = fortifyHeaders({
        xFrameOptions: {},
      });

      expect(fortifiedHeaders).toEqual({
        'X-Frame-Options': 'SAMEORIGIN',
      });
    });

    it('returns defaults for X-Permitted-Cross-Domain-Policies when nothing is specified', function test() {
      const fortifiedHeaders = fortifyHeaders({
        xPermittedCrossDomainPolicies: {},
      });

      expect(fortifiedHeaders).toEqual({
        'X-Permitted-Cross-Domain-Policies': 'none',
      });
    });
  });

  describe('failed-states', function failedStates() {
    it('throws when a property is on config that does not map to a header', function test() {
      // potential untyped JavaScript consumption
      expect(() =>
        fortifyHeaders({ unknownHeader: ['SAMEORIGIN'] } as Record<
          string,
          string[] | boolean
        >),
      ).toThrowErrorMatchingInlineSnapshot(
        `"unknownHeader is not a supported header"`,
      );
    });
  });
});
