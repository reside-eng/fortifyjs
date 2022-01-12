<div align="center">
    <h1>@side/fortifyjs</h1>
    <div>A platform-agnostic lib for generating security headers for your web application.</div>
    </br>
</div>

<div align="center">

<!-- populate with status badges before production launch... -->

</div>

## Getting Started

Modern web applications don't just need a helmet; they need a fortress. FortifyJS is just that, the walls to gate client and server-side requests in a world where attackers can manipulate the browser in many ways to break into your web application.

While `helmet.js` is useful for `express` applications, in a world of alternatives to express popping up and different ways of writing JavaScript applications on the rise, there needs to be an alternative that abstracts the production of valid security headers out of our modern applications. FortifyJS exists in this niche. FortifyJS is solely responsible for providing a representation that is useful in setting headers in consumer applications. FortifyJS takes control of the headers; you take over and implement them in your application.

FortifyJS also differs in that it seeks to provide a comprehensive set of security headers to form a default posture for any application.

### Installation

Install through your package manager within an existing project:

```bash
yarn add @side/fortifyjs
```

### How-to

FortifyJS exports one function: `fortifyHeaders`. FortifyJS takes an object literal with properties that match each supported security header. This function returns an object mapping ths string header name (e.g. `X-Content-Type-Options`) to a value (e.g. `nosniff`).

```javascript
import { fortifyHeaders, FortifySettings } from '@side/fortifyjs';

const headers = fortifyHeaders({
  xContentTypeOptions: {
    nosniff: true,
  },
});

/** @type {FortifySettings} */
console.log(headers);
/*
 * { 'X-Content-Type-Options': 'nosniff' }
 */
```

You can then use this object to integrate within the platform of your choice: `next`, `fastify`, etc.

## Header Inclusion Strategy

The strategy for this problem is building a lib that can be consumed by packages that integrate with these different providers: `next`, `fastify`, etc.

Since this library is specifically for delivering the relevant headers to secure modern web applications, it not contain information about `X-Powered-By`. This header is typically removed completely. FortifyJS only provides ones that ought to be _included_, not _excluded_. This should be handled at the consumer-level in whichever platform you're integrating the security headers into.

### Supported Headers

| Header Name                       | Default Value                                                                                                                                                                                                                                     | Details                                       |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| Content-Security-Policy           | default-src 'self'; base-uri 'self'; font-src 'self' https: data:; frame-ancestors 'self'; img-src 'self' data:; object-src 'none'; script-src 'self'; script-src-attr 'none'; style-src 'self' https: 'unsafe-inline'; upgrade-insecure-requests | [Link][content-security-policy-ref]           |
| Cross-Origin-Embedder-Policy      | require-corp                                                                                                                                                                                                                                      | [Link][cross-origin-embedder-policy-ref]      |
| Cross-Origin-Opener-Policy        | same-origin                                                                                                                                                                                                                                       | [Link][cross-origin-opener-policy-ref]        |
| Cross-Origin-Resource-Policy      | same-origin                                                                                                                                                                                                                                       | [Link][cross-origin-resource-policy-ref]      |
| Expect-Ct                         | max-age=0                                                                                                                                                                                                                                         | [Link][expect-ct-ref]                         |
| Origin-Agent-Cluster              | ?1                                                                                                                                                                                                                                                | [Link][origin-agent-cluster-ref]              |
| Referrer-Policy                   | no-referrer                                                                                                                                                                                                                                       | [Link][referrer-policy-ref]                   |
| Strict-Transport-Security         | max-age=15552000                                                                                                                                                                                                                                  | [Link][strict-transport-security-ref]         |
| X-Content-Type-Options            | nosniff                                                                                                                                                                                                                                           | [Link][x-content-type-options-ref]            |
| X-Dns-Prefetch-Control            | off                                                                                                                                                                                                                                               | [Link][x-dns-prefetch-control-ref]            |
| X-Download-Options                | noopen                                                                                                                                                                                                                                            | [Link][x-download-options-ref]                |
| X-Frame-Options                   | SAMEORIGIN                                                                                                                                                                                                                                        | [Link][x-frame-options]                       |
| X-Permitted-Cross-Domain-Policies | none                                                                                                                                                                                                                                              | [Link][x-permitted-cross-domain-policies-ref] |
| ---------------------------       |

[content-security-policy-ref]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy
[cross-origin-embedder-policy-ref]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy
[cross-origin-opener-policy-ref]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Opener-Policy
[cross-origin-resource-policy-ref]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy
[expect-ct-ref]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect-CT
[origin-agent-cluster-ref]: https://web.dev/origin-agent-cluster/
[referrer-policy-ref]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
[strict-transport-policy-ref]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security
[x-content-type-options-ref]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options
[x-dns-prefetch-control-ref]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
[x-download-options-ref]: https://www.nwebsec.com/HttpHeaders/SecurityHeaders/XDownloadOptions#:~:text=The%20X%2DDownload%2DOptions%20is,context%20of%20the%20web%20site.
[x-frame-options-ref]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options
[x-permitted-cross-domain-policies-ref]: https://www.scip.ch/en/?labs.20180308
