import { getAllHeaders } from '../../headers';

describe('tests for get-all-headers', () => {
  it('should return all available headers', () => {
    const headers = Object.keys(getAllHeaders());
    expect(headers).toEqual([
      'contentSecurityPolicy',
      'crossOriginEmbedderPolicy',
      'crossOriginOpenerPolicy',
      'crossOriginResourcePolicy',
      'expectCt',
      'originAgentCluster',
      'referrerPolicy',
      'strictTransportSecurity',
      'xContentTypeOptions',
      'xDnsPrefetchControl',
      'xDownloadOptions',
      'xFrameOptions',
      'xPermittedCrossDomainPolicies',
    ]);
  });
});
