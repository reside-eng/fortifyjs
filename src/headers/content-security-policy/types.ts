import { FortifyHeader } from '../types';

type SandboxDirective = boolean | string;

/**
 * Represents the user-specified header configuration for Content-Security-Policy
 * see: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy
 */
export interface ContentSecurityPolicy extends FortifyHeader {
  /**
   * Fires a SecurityPolicyViolationEvent.
   */
  reportTo?: string[];
  /**
   * Restricts the URLs to which a document can initiate navigation by any means, including <form> (if form-action is not specified), <a>, window.location, window.open, etc.
   */
  navigateTo?: string[];
  /**
   * Instructs user agents to treat all of a site's insecure URLs (those served over HTTP) as though they have been replaced with secure URLs (those served over HTTPS). This directive is intended for web sites with large numbers of insecure legacy URLs that need to be rewritten.
   */
  upgradeInsecureRequests?: boolean;
  /**
   * Restricts the URLs which can be used as the target of a form submissions from a given context.
   */
  formAction?: string[];
  /**
   * Specifies valid parents that may embed a page using <frame>, <iframe>, <object>, <embed>, or <applet>.
   */
  frameAncestors?: string[];
  /**
   * Defines the valid sources for web workers and nested browsing contexts loaded using elements such as <frame> and <iframe>
   */
  childSrc?: string[];
  /**
   * Restricts the URLs which can be loaded using script interfaces
   */
  connectSrc?: string[];
  /**
   * Serves as a fallback for the other fetch directives.
   */
  defaultSrc?: string[];
  /**
   * Specifies valid sources for fonts loaded using `@font-face.`
   */
  fontSrc?: string[];
  /**
   * Specifies valid sources for nested browsing contexts loading using elements such as <frame> and <iframe>.
   */
  frameSrc?: string[];
  /**
   * Specifies valid sources of images and favicons.
   */
  imgSrc?: string[];
  /**
   * Specifies valid sources of application manifest files.
   */
  manifestSrc?: string[];
  /**
   * Specifies valid sources for loading media using the <audio> , <video> and <track> elements.
   */
  mediaSrc?: string[];
  /**
   * Specifies valid sources for the <object>, <embed>, and <applet> elements.
   */
  objectSrc?: string[];
  /**
   * Specifies valid sources to be prefetched or prerendered.
   */
  prefetchSrc?: string[];
  /**
   * Specifies valid sources for JavaScript.
   */
  scriptSrc?: string[];
  /**
   * Specifies valid sources for JavaScript <script> elements.
   */
  scriptSrcElem?: string[];
  /**
   * Specifies valid sources for JavaScript inline event handlers.
   */
  scriptSrcAttr?: string[];
  /**
   * Specifies valid sources for stylesheets.
   */
  styleSrc?: string[];
  /**
   * Specifies valid sources for stylesheets <style> elements and <link> elements with rel="stylesheet".
   */
  styleSrcElem?: string[];
  /**
   * Specifies valid sources for inline styles applied to individual DOM elements.
   */
  styleSrcAttr?: string[];
  /**
   * Specifies valid sources for Worker, SharedWorker, or ServiceWorker scripts.
   */
  workerSrc?: string[];
  /**
   * Restricts the URLs which can be used in a document's <base> element.
   */
  baseUri?: string[];
  /**
   * Enables a sandbox for the requested resource similar to the <iframe> sandbox attribute.
   */
  sandbox?: SandboxDirective;
}
