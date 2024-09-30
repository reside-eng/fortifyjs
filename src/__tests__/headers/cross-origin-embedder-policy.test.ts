import { describe, it, expect } from 'vitest';
import { fortifyHeaders } from '../..';

describe('Cross-Origin-Embedder-Policy Tests', () => {
  it('returns defaults for Cross-Origin-Embedder-Policy when nothing is specified', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        crossOriginEmbedderPolicy: {},
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'Cross-Origin-Embedder-Policy': 'require-corp',
    });
  });
});
