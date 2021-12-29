type SandboxDirective = boolean | string;

export type DocumentDirectiveSettings = {
  baseUri: string[];
  sandbox: SandboxDirective;
};

export type FetchDirectiveSettings = {
  childSrc: string[];
  defaultSrc: string[];
  fontSrc: string[];
  frameSrc: string[];
  imgSrc: string[];
  manifestSrc: string[];
  mediaSrc: string[];
  objectSrc: string[];
  prefetchSrc: string[];
  scriptSrc: string[];
  scriptSrcElem: string[];
  scriptSrcAttr: string[];
  styleSrc: string[];
  styleSrcElem: string[];
  workerSrc: string[];
};

export type NavigationDirectives = {
  formAction: string[];
  frameAncestors: string[];
};

export type ReportingDirectives = {
  reportTo: string[];
};

export type OtherDirectives = {
  upgradeInsecureRequests: boolean;
};

export type ContentSecurityPolicy =
  | FetchDirectiveSettings
  | DocumentDirectiveSettings
  | NavigationDirectives
  | ReportingDirectives
  | OtherDirectives;
