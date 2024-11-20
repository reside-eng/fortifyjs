import { type ContentSecurityPolicy } from './headers/content-security-policy/types';
import { type CrossOriginEmbedderPolicy } from './headers/cross-origin-embedder-policy/types';
import { type CrossOriginOpenerPolicy } from './headers/cross-origin-opener-policy/types';
import { type CrossOriginResourcePolicy } from './headers/cross-origin-resource-policy/types';
import { type ExpectCt } from './headers/expect-ct/types';
import { type OriginAgentCluster } from './headers/origin-agent-cluster/types';
import { type ReferrerPolicy } from './headers/referrer-policy/types';
import { type StrictTransportSecurity } from './headers/strict-transport-security/types';
import { type FortifyHeader } from './headers/types';
import { type XContentTypeOptions } from './headers/x-content-type-options/types';
import { type XDnsPrefetchControl } from './headers/x-dns-prefetch-control/types';
import { type XDownloadOptions } from './headers/x-download-options/types';
import { type XFrameOptions } from './headers/x-frame-options/types';
import { type XPermittedCrossDomainPolicies } from './headers/x-permitted-cross-domain-poilicies/types';

/**
 * Represents the primary configuration for FortifyJS
 */
export type FortifySettings = { [key: string]: FortifyHeader | boolean } & {
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
  xContentTypeOptions?: XContentTypeOptions | boolean;
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
export type GenerationOptions = {
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
