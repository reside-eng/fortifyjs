import { contentSecurityPolicy } from './content-security-policy';
import { crossOriginEmbedderPolicy } from './cross-origin-embedder-policy';
import { crossOriginOpenerPolicy } from './cross-origin-opener-policy';
import { crossOriginResourcePolicy } from './cross-origin-resource-policy';
import { expectCt } from './expect-ct';
import { originAgentCluster } from './origin-agent-cluster';
import { referrerPolicy } from './referrer-policy';
import { strictTransportSecurity } from './strict-transport-security';
import { FortifyHeader } from './types';
import { xContentTypeOptions } from './x-content-type-options';
import { xDownloadOptions } from './x-download-options';
import { xFrameOptions } from './x-frame-options';
import { xPermittedCrossDomainPolicies } from './x-permitted-cross-domain-poilicies';

type HeaderObject = { [key: string]: string };
type HeaderFunction = (settings: FortifyHeader) => HeaderObject;

/**
 * @function getAllHeaders returns an object with all the available fortifiable headers
 * @returns an object with all the available headers
 */
export function getAllHeaders(): Record<string, HeaderFunction> {
  return {
    contentSecurityPolicy,
    crossOriginEmbedderPolicy,
    crossOriginOpenerPolicy,
    crossOriginResourcePolicy,
    expectCt,
    originAgentCluster,
    referrerPolicy,
    strictTransportSecurity,
    xContentTypeOptions,
    xDownloadOptions,
    xFrameOptions,
    xPermittedCrossDomainPolicies,
  };
}
