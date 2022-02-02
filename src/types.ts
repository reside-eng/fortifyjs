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
export type FortifySettings = { [key: string]: object | boolean } & {
  /**
   * Configuration for Content-Security-Policy
   */
  contentSecurityPolicy?: ContentSecurityPolicy | boolean;
  /**
   * Configuration for Cross-Origin-Embedder-Policy
   */
  crossOriginEmbedderPolicy?: CrossOriginEmbedderPolicy | boolean;
  /**
   * Configuration for Cross-Origin-Opener-Policy
   */
  crossOriginOpenerPolicy?: CrossOriginOpenerPolicy | boolean;
  /**
   * Configuration for Cross-Origin-Resource-Policy
   */
  crossOriginResourcePolicy?: CrossOriginResourcePolicy | boolean;
  /**
   * Configuration for Expect-CT
   */
  expectCt?: ExpectCt | boolean;
  /**
   * Configuration for Origin-Agent-Cluster
   */
  originAgentCluster?: OriginAgentCluster | boolean;
  /**
   * Configuration for Referrer-Policy
   */
  referrerPolicy?: ReferrerPolicy | boolean;
  /**
   * Configuration for Strict-Transport-Security
   */
  strictTransportSecurity?: StrictTransportSecurity | boolean;
  /**
   * Configuration for X-Content-Type-Options
   */
  xContentTypeOptions?: XContentTypeOotions | boolean;
  /**
   * Configuration for X-DNS-Prefetch-Control
   */
  xDnsPrefetchControl?: XDnsPrefetchControl | boolean;
  /**
   * Configuration for X-Download-Options
   */
  xDownloadOptions?: XDownloadOptions | boolean;
  /**
   * Configuration for X-Frame-Options
   */
  xFrameOptions?: XFrameOptions | boolean;
  /**
   * Configuration for X-Permitted-Cross-Domain-Policies
   */
  xPermittedCrossDomainPolicies?: XPermittedCrossDomainPolicies | boolean;
};

/**
 * Represents higher-order options for header config generation
 */
export type FortifyOptions = {
  /**
   * Directs FortifyJS to opt in or out of defaults
   */
  useDefaults?: boolean;
};

/**
 * Represents the final security header configuration returned by FortifyJS
 */
export type FortifyHeaders = { [key: string]: string } & {
  'Content-Security-Policy'?: string;
  'Cross-Origin-Embedder-Policy'?: string;
  'Cross-Origin-Opener-Policy'?: string;
  'Cross-Origin-Resource-Policy'?: string;
  'Expect-Ct'?: string;
  'Origin-Agent-Cluster'?: string;
  'Referrer-Policy'?: string;
  'Strict-Transport-Policy'?: string;
  'X-Content-Type-Options'?: string;
  'X-Dns-Prefetch-Control'?: string;
  'X-Download-Options'?: string;
  'X-Frame-Options'?: string;
  'X-Permitted-Cross-Domain-Policies'?: string;
};
