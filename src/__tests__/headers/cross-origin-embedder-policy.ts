import { fortifyHeaders } from '../..';

describe('Cross-Origin-Embedder-Policy Tests', function contentSecurityPolicyTests() {
  it('returns defaults for Cross-Origin-Embedder-Policy when nothing is specified', function test() {
    const fortifiedHeaders = fortifyHeaders({
      crossOriginEmbedderPolicy: {},
    });

    expect(fortifiedHeaders).toEqual({
      'Cross-Origin-Embedder-Policy': 'require-corp',
    });
  });
});