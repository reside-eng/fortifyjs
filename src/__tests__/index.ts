import { fortifyHeaders } from '..';

describe('fortify-core entrypoint tests', function fortifyCoreEntrypointTests() {
  describe('default state', function defaultStateTests() {
    it('gets all defaults when initialized to an empty config', function test() {
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
