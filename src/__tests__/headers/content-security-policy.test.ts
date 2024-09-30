import { describe, it, expect } from 'vitest';
import { fortifyHeaders } from '../..';

describe('Content-Security-Policy Tests', () => {
  it('exercises full configuration options', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        contentSecurityPolicy: {
          defaultSrc: ["'self'", 'somedomain.com', '*.somedomain.com'],
          baseUri: ["'self'"],
          fontSrc: ["'self'", 'https:', 'data:'],
          frameAncestors: ["'self'"],
          imgSrc: ["'self'", 'data:'],
          objectSrc: ["'none'"],
          scriptSrc: ["'self'"],
          scriptSrcAttr: ["'none'"],
          styleSrc: ["'self'", 'https:', "'unsafe-inline'"],
          upgradeInsecureRequests: true,
        },
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'Content-Security-Policy':
        "default-src 'self' somedomain.com *.somedomain.com; base-uri 'self'; font-src 'self' https: data:; frame-ancestors 'self'; img-src 'self' data:; object-src 'none'; script-src 'self'; script-src-attr 'none'; style-src 'self' https: 'unsafe-inline'; upgrade-insecure-requests",
    });
  });

  it('returns defaults for Content-Security-Policy when nothing is specified', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        contentSecurityPolicy: {},
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'Content-Security-Policy':
        "default-src 'self'; base-uri 'self'; font-src 'self' https: data:; frame-ancestors 'self'; img-src 'self' data:; object-src 'none'; script-src 'self'; script-src-attr 'none'; style-src 'self' https: 'unsafe-inline'; upgrade-insecure-requests",
    });
  });

  it('returns the header as specified', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        contentSecurityPolicy: {
          defaultSrc: ["'self'", 'https://'],
          upgradeInsecureRequests: false,
        },
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'Content-Security-Policy': "default-src 'self' https://",
    });
  });
});
