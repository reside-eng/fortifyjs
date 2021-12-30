import { FortifyHeader } from '../types';

type SandboxDirective = boolean | string;

export interface ContentSecurityPolicy extends FortifyHeader {
  reportTo?: string[];
  upgradeInsecureRequests?: boolean;
  formAction?: string[];
  frameAncestors?: string[];
  childSrc?: string[];
  defaultSrc?: string[];
  fontSrc?: string[];
  frameSrc?: string[];
  imgSrc?: string[];
  manifestSrc?: string[];
  mediaSrc?: string[];
  objectSrc?: string[];
  prefetchSrc?: string[];
  scriptSrc?: string[];
  scriptSrcElem?: string[];
  scriptSrcAttr?: string[];
  styleSrc?: string[];
  styleSrcElem?: string[];
  workerSrc?: string[];
  baseUri?: string[];
  sandbox?: SandboxDirective;
}
