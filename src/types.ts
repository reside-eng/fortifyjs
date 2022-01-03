import { ContentSecurityPolicy } from './headers/content-security-policy/types';
import { CrossOriginEmbedderPolicy } from './headers/cross-origin-embedder-policy/types';
import { CrossOriginOpenerPolicy } from './headers/cross-origin-opener-policy/types';
import { CrossOriginResourcePolicy } from './headers/cross-origin-resource-policy/types';
import { ExpectCt } from './headers/expect-ct/types';
import { OriginAgentCluster } from './headers/origin-agent-cluster/types';
import { ReferrerPolicy } from './headers/referrer-policy/types';
import { StrictTransportSecurity } from './headers/strict-transport-security/types';
import { XContentTypeOotions } from './headers/x-content-type-options/types';
import { XDnsPrefetchControl } from './headers/x-dns-prefetch-control/types';
import { XDownloadOptions } from './headers/x-download-options/types';
import { XFrameOptions } from './headers/x-frame-options/types';
import { XPermittedCrossDomainPolicies } from './headers/x-permitted-cross-domain-poilicies/types';

export type FortifySettings = {
  contentSecurityPolicy?: ContentSecurityPolicy;
  crossOriginEmbedderPolicy?: CrossOriginEmbedderPolicy;
  crossOriginOpenerPolicy?: CrossOriginOpenerPolicy;
  crossOriginResourcePolicy?: CrossOriginResourcePolicy;
  expectCt?: ExpectCt;
  originAgentCluster?: OriginAgentCluster;
  referrerPolicy?: ReferrerPolicy;
  strictTransportSecurity?: StrictTransportSecurity;
  xContentTypeOptions?: XContentTypeOotions;
  xDnsPrefetchControl?: XDnsPrefetchControl;
  xDownloadOptions?: XDownloadOptions;
  xFrameOptions?: XFrameOptions;
  xPermittedCrossDomainPolicies?: XPermittedCrossDomainPolicies;
};
