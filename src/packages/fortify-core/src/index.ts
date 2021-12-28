import { NextConfig, NextPage } from 'next';
import { NextHeaders } from '../types';

export function getFortifiedHeaders() {

}

export const fortifyNextConfig = (nextConfig: NextConfig): NextHeaders => {
  console.log(nextConfig);
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
   * X-Powered-By -> null
   * X-XSS-Protection -> 0
   */
  return () => Promise.resolve([]);
};

/**
 * fortifyNextSSR attaches headers to the component res
 */
export function fortifyNextSSR() {
  return function setServerSideHeaders(NextPage: NextPage) {
    //    const Component: NextComponent = (props: any) => React.createElement(ChildComponent, props);
    //
    //    Component.getInitialProps = async (context) => {
    //      if (context == undefined) throw new Error("Cannnot find a context in getInitialProps");
    //
    //      const initialProps = (await ChildComponent.getInitialProps?.(context)) ?? {};
    //      const res = context.res ?? context.ctx?.res;
    //      if (res == undefined) return initialProps;
    //      if (res.headersSent) return initialProps;
    //
    //      const headers = createHeadersObject(options);
    //      Object.entries(headers).forEach(([name, value]) => res.setHeader(name, value));
    //
    //      return initialProps;
    //    };
    //
    //    return Component;
  };
}
