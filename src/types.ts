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

/**
 * Represents the primary configuration for FortifyJS
 */
export type FortifySettings = {
  /**
   * Configuration for Content-Security-Policy
   */
  contentSecurityPolicy?: ContentSecurityPolicy;
  /**
   * Configuration for Cross-Origin-Embedder-Policy
   */
  crossOriginEmbedderPolicy?: CrossOriginEmbedderPolicy;
  /**
   * Configuration for Cross-Origin-Opener-Policy
   */
  crossOriginOpenerPolicy?: CrossOriginOpenerPolicy;
  /**
   * Configuration for Cross-Origin-Resource-Policy
   */
  crossOriginResourcePolicy?: CrossOriginResourcePolicy;
  /**
   * Configuration for Expect-CT
   */
  expectCt?: ExpectCt;
  /**
   * Configuration for Origin-Agent-Cluster
   */
  originAgentCluster?: OriginAgentCluster;
  /**
   * Configuration for Referrer-Policy
   */
  referrerPolicy?: ReferrerPolicy;
  /**
   * Configuration for Strict-Transport-Security
   */
  strictTransportSecurity?: StrictTransportSecurity;
  /**
   * Configuration for X-Content-Type-Options
   */
  xContentTypeOptions?: XContentTypeOotions;
  /**
   * Configuration for X-DNS-Prefetch-Control
   */
  xDnsPrefetchControl?: XDnsPrefetchControl;
  /**
   * Configuration for X-Download-Options
   */
  xDownloadOptions?: XDownloadOptions;
  /**
   * Configuration for X-Frame-Options
   */
  xFrameOptions?: XFrameOptions;
  /**
   * Configuration for X-Permitted-Cross-Domain-Policies
   */
  xPermittedCrossDomainPolicies?: XPermittedCrossDomainPolicies;
};

/**
 * Represents the final security header configuration returned by FortifyJS
 */
export type FortifyHeaders = {
  'Content-Security-Policy': string;
  'Cross-Origin-Embedder-Policy': string;
  'Cross-Origin-Opener-Policy': string;
  'Cross-Origin-Resource-Policy': string;
  'Expect-Ct': string;
  'Origin-Agent-Cluster': string;
  'Referrer-Policy': string;
  'Strict-Transport-Policy': string;
  'X-Content-Type-Options': string;
  'X-Dns-Prefetch-Control': string;
  'X-Download-Options': string;
  'X-Frame-Options': string;
  'X-Permitted-Cross-Domain-Policies': string;
};
