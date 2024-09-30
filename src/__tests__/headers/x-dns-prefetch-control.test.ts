import { describe, it, expect } from 'vitest';
import { fortifyHeaders } from '../..';

describe('X-DNS-Prefetch-Control Tests', () => {
  it('returns defaults for X-DNS-Prefetch-Control when nothing is specified', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        xDnsPrefetchControl: {},
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'X-Dns-Prefetch-Control': 'off',
    });
  });

  it('returns off', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        xDnsPrefetchControl: {
          off: true,
        },
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'X-Dns-Prefetch-Control': 'off',
    });
  });

  it('returns on', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        xDnsPrefetchControl: {
          on: true,
        },
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'X-Dns-Prefetch-Control': 'on',
    });
  });

  it('enforces single-selection', () => {
    expect(() =>
      fortifyHeaders(
        {
          xDnsPrefetchControl: {
            on: true,
            off: true,
          },
        },
        { useDefaults: false },
      ),
    ).toThrowErrorMatchingInlineSnapshot(
      `[Error: X-Dns-Prefetch-Control only allows one selection. You can only specify one option for this header.]`,
    );
  });
});
