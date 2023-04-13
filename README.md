<div align="center">
    <h1>@side/fortifyjs</h1>
    <div>A platform-agnostic library for generating security headers for your web application.</div>
    </br>
</div>

<div align="center">

[![NPM version][npm-image]][npm-url]
[![License][license-image]][license-url]
[![Build Status][build-status-image]][build-status-url]
[![Coverage Status][coverage-image]][coverage-url]
[![semantic-release][semantic-release-icon]][semantic-release-url]
[![Code Style][code-style-image]][code-style-url]

</div>

## Getting Started

Modern web applications don't just need a helmet; they need a fortress. FortifyJS is just that, the walls to gate client and server-side requests in a world where attackers can manipulate the browser in many ways to break into your web application and steal information of trade secrets.

While [helmet.js](https://helmetjs.github.io/) is useful for [express](https://expressjs.com/) applications, in a world of alternatives to express popping up and different ways of writing JavaScript applications on the rise, there needs to be an alternative that abstracts the production of valid security headers out of our modern applications. FortifyJS exists in this niche. FortifyJS is solely responsible for providing a representation that is useful in setting headers in consumer applications. FortifyJS takes control of the headers; you take over and implement them in your application.

FortifyJS also differs in that it seeks to provide a comprehensive set of security headers to form a default posture for any application.

### Installation

Install through your package manager within an existing project:

```bash
yarn add @side/fortifyjs
```

### How-to

FortifyJS exports one function: `fortifyHeaders`. FortifyJS takes an object literal with properties that match each supported security header. This function returns an object mapping ths string header name (e.g. `X-Content-Type-Options`) to a value (e.g. `nosniff`).

The current default configuration can be expressed like this:

```javascript
import { fortifyHeaders, FortifySettings } from '@side/fortifyjs';

const headers = fortifyHeaders({
  xContentTypeOptions: {
    nosniff: true,
  },
  contentSecurityPolicy: {
    defaultSrc: ["'self'"],
    baseUri: ["'self'"],
    fontSrc: ["'self'", 'https:', 'data:'],
    frameAncestors: ["'self'"],
    imgSrc: ["'self'", "'data:'"],
    objectSrc: ["'none'"],
    scriptSrc: ["'self'"],
    scriptSrcAttr: ["'none'"],
    styleSrc: ["'self'", "'https:'", "'unsafe-inline'"],
    upgradeInsecureRequests: true,
  },
  crossOriginEmbedderPolicy: {
    requireCorp: true,
  },
  crossOriginOpenerPolicy: {
    sameOrigin: true,
  },
  crossOriginResourcePolicy: {
    sameOrigin: true,
  },
  expectCt: {
    maxAge: 0,
  },
  originAgentCluster: {
    enable: true,
  },
  referrerPolicy: {
    noReferrer: true,
  },
  strictTransportSecurity: {
    maxAge: 31536000,
  },
  xContentTypeOptions: {
    noSniff: true,
  },
  xDnsPrefetchControl: {
    off: true,
  },
  xDownloadOptions: {
    noopen: true,
  },
  xFrameOptions: {
    sameOrigin: true,
  },
  xPermittedCrossDomainPolicies: {
    none: true,
  },
});

/** @type {FortifySettings} */
console.log(headers);
/*
 * {
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
    }
 */
```

You can choose to use these defaults by setting the fortify header to an empty object. This can be done globally:

```javascript
import { fortifyHeaders, FortifySettings } from '@side/fortifyjs';

const headers = fortifyHeaders();

/** @type {FortifySettings} */
console.log(headers); // same as above
```

Or, you can choose to pull in individual header default postures:

```javascript
import { fortifyHeaders, FortifySettings } from '@side/fortifyjs';

const headers = fortifyHeaders({
  contentSecurityPolicy: {},
});

/** @type {FortifySettings} */
console.log(headers); // same as above
/*
 * {
      'Content-Security-Policy':
        "default-src 'self'; base-uri 'self'; font-src 'self' https: data:; frame-ancestors 'self'; img-src 'self' data:; object-src 'none'; script-src 'self'; script-src-attr 'none'; style-src 'self' https: 'unsafe-inline'; upgrade-insecure-requests",
    }
 */
```

If you want to specify a custom header value for one, like `Content-Security-Policy`, but also want to include all of the default headers, then you can use the second parameter to `fortifyHeaders` to tell the header generation that you want to include the rest of the available headers:

```javascript
import { fortifyHeaders, FortifySettings } from '@side/fortifyjs';

const headers = fortifyHeaders(
  {
    contentSecurityPolicy: {
      defaultSrc: ["'self'", '*.somedomain.com'],
    },
  },
  { useDefaults: true },
);

/** @type {FortifySettings} */
console.log(headers); // same as above
/*
 * {
      'Content-Security-Policy': "default-src 'self' *.somedomain.com",
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
    }
 */
```

You can then use this object to integrate within the platform of your choice: `next`, `fastify`, etc.

## Header Inclusion Strategy

The strategy for this problem is building a lib that can be consumed by packages that integrate with these different providers: `next`, `fastify`, etc.

Since this library is specifically for delivering the relevant headers to secure modern web applications, it not contain information about `X-Powered-By`. This header is typically removed completely. FortifyJS only provides ones that ought to be _included_, not _excluded_. This should be handled at the consumer-level in whichever platform you're integrating the security headers into.

### Supported Headers

| Header Name                       | Default Value                                                                                                                                                                                                                                     | Details                                       |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| Content-Security-Policy           | default-src 'self'; base-uri 'self'; font-src 'self' https: data:; frame-ancestors 'self'; img-src 'self' data:; object-src 'none'; script-src 'self'; script-src-attr 'none'; style-src 'self' https: 'unsafe-inline'; upgrade-insecure-requests | [Link][content-security-policy-url]           |
| Cross-Origin-Embedder-Policy      | require-corp                                                                                                                                                                                                                                      | [Link][cross-origin-embedder-policy-url]      |
| Cross-Origin-Opener-Policy        | same-origin                                                                                                                                                                                                                                       | [Link][cross-origin-opener-policy-url]        |
| Cross-Origin-Resource-Policy      | same-origin                                                                                                                                                                                                                                       | [Link][cross-origin-resource-policy-url]      |
| Expect-Ct                         | max-age=0                                                                                                                                                                                                                                         | [Link][expect-ct-url]                         |
| Origin-Agent-Cluster              | ?1                                                                                                                                                                                                                                                | [Link][origin-agent-cluster-url]              |
| Referrer-Policy                   | no-referrer                                                                                                                                                                                                                                       | [Link][referrer-policy-url]                   |
| Strict-Transport-Security         | max-age=15552000                                                                                                                                                                                                                                  | [Link][strict-transport-security-url]         |
| X-Content-Type-Options            | nosniff                                                                                                                                                                                                                                           | [Link][x-content-type-options-url]            |
| X-Dns-Prefetch-Control            | off                                                                                                                                                                                                                                               | [Link][x-dns-prefetch-control-url]            |
| X-Download-Options                | noopen                                                                                                                                                                                                                                            | [Link][x-download-options-url]                |
| X-Frame-Options                   | SAMEORIGIN                                                                                                                                                                                                                                        | [Link][x-frame-options-url]                   |
| X-Permitted-Cross-Domain-Policies | none                                                                                                                                                                                                                                              | [Link][x-permitted-cross-domain-policies-url] |

### Contributing Policy

The development team at Side is currently investigating the best expression of Codes of Conduct and Contributing Guidelines to fit our culture and values. FortifyJS is a Free and Open Source software solution that is licensed under MIT. If you desire to contribute to extend the functionality or address an issue, please maintain professional communication practices. That alone goes a long way toward effective collaboration and benefiting the community at large!

[content-security-policy-url]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy
[cross-origin-embedder-policy-url]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy
[cross-origin-opener-policy-url]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy
[cross-origin-resource-policy-url]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy
[expect-ct-url]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect-CT
[origin-agent-cluster-url]: https://web.dev/origin-agent-cluster/
[referrer-policy-url]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
[strict-transport-security-url]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
[x-content-type-options-url]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
[x-dns-prefetch-control-url]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
[x-download-options-url]: https://www.nwebsec.com/HttpHeaders/SecurityHeaders/XDownloadOptions#:~:text=The%20X%2DDownload%2DOptions%20is,context%20of%20the%20web%20site.
[x-frame-options-url]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
[x-permitted-cross-domain-policies-url]: https://www.scip.ch/en/?labs.20180308
[npm-image]: https://img.shields.io/npm/v/@side/fortifyjs.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@side/fortifyjs
[build-status-image]: https://img.shields.io/github/workflow/status/reside-eng/fortifyjs/Release?style=flat-square
[build-status-url]: https://github.com/reside-eng/fortifyjs/actions
[license-image]: https://img.shields.io/npm/l/@side/fortifyjs.svg?style=flat-square
[license-url]: https://github.com/reside-eng/fortifyjs/blob/main/LICENSE
[code-style-image]: https://img.shields.io/badge/code%20style-airbnb-blue.svg?style=flat-square
[code-style-url]: https://github.com/airbnb/javascript
[semantic-release-icon]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[coverage-image]: https://img.shields.io/coveralls/github/reside-eng/fortifyjs?style=flat-square
[coverage-url]: https://coveralls.io/github/reside-eng/fortifyjs?branch=main
