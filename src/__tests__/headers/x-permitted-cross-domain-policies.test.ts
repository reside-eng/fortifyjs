import { describe, it, expect } from 'vitest';
import { fortifyHeaders } from '../..';

describe('X-Permitted-Cross-Domain-Policies Tests', () => {
  it('returns defaults for X-Permitted-Cross-Domain-Policies when nothing is specified', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        xPermittedCrossDomainPolicies: {},
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'X-Permitted-Cross-Domain-Policies': 'none',
    });
  });

  it('returns none', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        xPermittedCrossDomainPolicies: {
          none: true,
        },
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'X-Permitted-Cross-Domain-Policies': 'none',
    });
  });

  it('returns master-only', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        xPermittedCrossDomainPolicies: {
          masterOnly: true,
        },
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'X-Permitted-Cross-Domain-Policies': 'master-only',
    });
  });

  it('returns by-content-type', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        xPermittedCrossDomainPolicies: {
          byContentType: true,
        },
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'X-Permitted-Cross-Domain-Policies': 'by-content-type',
    });
  });

  it('returns all', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        xPermittedCrossDomainPolicies: {
          all: true,
        },
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'X-Permitted-Cross-Domain-Policies': 'all',
    });
  });

  it('enforces single-selection', () => {
    expect(() =>
      fortifyHeaders(
        {
          xPermittedCrossDomainPolicies: {
            masterOnly: true,
            all: true,
          },
        },
        { useDefaults: false },
      ),
    ).toThrowErrorMatchingInlineSnapshot(
      `[Error: X-Permitted-Cross-Domain-Policies only allows one selection. You can only specify one option for this header.]`,
    );
  });
});
