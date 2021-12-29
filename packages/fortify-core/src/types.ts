import { ContentSecurityPolicy } from './headers/content-security-policy/types';
import { ExpectCt } from './headers/expect-ct/types';
import { StrictTransportSecurity } from './headers/strict-transport-security/types';

export type SingleDirectiveHeader = string;
export type MultipleDirectiveHeader = string[];

export type FortifySettings = {
  contentSecurityPolicy: ContentSecurityPolicy;
  crossOriginEmbedderPolicy: SingleDirectiveHeader;
  crossOriginOpenerPolicy: SingleDirectiveHeader;
  crossOriginResourcePolicy: SingleDirectiveHeader;
  expectCt: ExpectCt;
  originAgentCluster: SingleDirectiveHeader;
  referrerPolicy: MultipleDirectiveHeader;
  strictTransportSecurity: StrictTransportSecurity;
  xContentTypeOptions: SingleDirectiveHeader;
  xDnsPrefetchControl: SingleDirectiveHeader;
  xDownloadOptions: SingleDirectiveHeader;
  xFrameOptions: SingleDirectiveHeader;
  xPermittedCrossDomainPolicies: SingleDirectiveHeader;
};
