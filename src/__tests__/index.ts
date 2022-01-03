import { fortifyHeaders } from '..'

describe('fortify-core entrypoint tests', function fortifyCoreEntrypointTests() {
  it('returns defaults for Content-Security-Policy when nothing is specified', function test() {
    const fortifiedHeaders = fortifyHeaders({
      contentSecurityPolicy: {}
    });

    expect(fortifiedHeaders).toEqual({
      'Content-Security-Policy': ''
    });
  });

  it('returns defaults for Cross-Origin-Embedder-Policy when nothing is specified', function test() {

  });

  it('returns defaults for Cross-Origin-Resource-Policy when nothing is specified', function test() {
  });

  it('returns defaults for Expect-CT when nothing is specified', function test() {
  });

  it('returns defaults for Origin-Agent-Cluster when nothing is specified', function test() {
  });

  it('returns defaults for Referrer-Policy when nothing is specified', function test() {
  });

  it('returns defaults for Strict-Transport-Security when nothing is specified', function test() {
  });

  it('returns defaults for X-Content-Type-Options when nothing is specified', function test() {
  });

  it('returns defaults for X-DNS-Prefetch-Control when nothing is specified', function test() {
  });

  it('returns defaults for X-Download-Options when nothing is specified', function test() {
  });

  it('returns defaults for X-Frame-Options when nothing is specified', function test() {
  });

  it('returns defaults for X-Permitted-Cross-Domain-Policies when nothing is specified', function test() {
  });
});
