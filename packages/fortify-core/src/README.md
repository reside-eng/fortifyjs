# Fortify CORE

## Rough Sketch

```javascript
const fortify = require('fortify-core')
const headers = fortify.headers({
  contentSecurityPolicy: '',
  crossOriginEmbedderPolicy: '',
  crossOriginOpenerPolicy: '',
  crossOriginResourcePolicy: '',
  expectCt: '',
  originAgentCluster: '',
  referrerPolicy: '',
  strictTransportSecurity: '',
  xContentTypeOptions: '',
  xDnsPrefetchControl: '',
  xDownloadOptions: '',
  xFrameOptions: '',
  xPermittedCrossDomainPolicies: '',
})

console.log(headers)

/*
 * { 
 *   'Content-Security-Policy': '',
 *   'Cross-Origin-Embedder-Policy': '',
 *   'Cross-Origin-Opener-Policy': '',
 *   'Cross-Origin-Resource-Policy': '',
 *   'Expect-CT': '',
 *   'Origin-Agent-Cluster': '',
 *   'Referrer-Policy': '',
 *   'Strict-Transport-Security': '',
 *   'X-Content-Type-Options': '',
 *   'X-DNS-Prefetch-Control': '',
 *   'X-Download-Options': '',
 *   'X-Frame-Options: '',
 *   'X-Permitted-Cross-Domain-Policies': '',
 *   'X-XSS-Protection': ''
 * }
 */
```

## Ideas

```javascript
  /*
   * Defaults for next-secure-headers:
   * Strict-Transport-Security -> max-age=63072000
   * X-Frame-Options -> deny
   * X-Download-Options -> noopen
   * X-Content-Type-Options -> nosniff
   * X-XSS-Protection -> 1
   * Content-Security-Policy: no-defaults
   *
   * Defaults for helmet:
   * Content-Security-Policy -> default-src 'self'; base-uri 'self'; block-all-mixed-content; font-src 'self' https: data:; frame-ancestors 'self'; img-src 'self' data:; object-src 'none'; script-src 'self'; script-src-attr 'none'; style-src 'self' https: 'unsafe-inline'; upgrade-insecure-requests
   * Cross-Origin-Embedder-Policy -> require-corp
   * Cross-Origin-Opener-Policy -> same-origin
   * Cross-Origin-Resource-Policy -> same-origin"
   * expect-ct => max-age=0
   * Origin-Agent-Cluster: ?1
   * Referrer-Policy -> no-referrer
   * Strict-Transport-Security -> max-age=180; includeSubdomains
   * X-Content-Type-Options -> nosniff
   * X-DNS-Prefetch-Control -> 'off'
   * X-Download-Options: noopen
   * X-Frame-Options: SAMEORIGIN
   * X-Permitted-Cross-Domain-Policies -> none
   * X-XSS-Protection -> 0
   */
```

We can't use `next-secure-headers` because the library is out of date with the standard and there are no custom header settings. We can't use `helmet` because it is written for `express`. 

## Strategy

The strategy for this problem is building a lib that can be consumed by packages that integrate with these different providers: `next`, `fastify`, etc.

Since this library is specifically for delivering the relevant headers to secure modern web applications, it not contain information about `X-Powered-By`. This should be handled at the consumer-level in whichever platform you're integrating the security headers into.
