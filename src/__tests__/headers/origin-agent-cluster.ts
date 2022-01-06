import { fortifyHeaders } from '../..';

describe('Origin-Agent-Cluster Tests', function originAgentClusterTests() {
  it('returns defaults for Origin-Agent-Cluster when nothing is specified', function test() {
    const fortifiedHeaders = fortifyHeaders({
      originAgentCluster: {},
    });

    expect(fortifiedHeaders).toEqual({
      'Origin-Agent-Cluster': '?1',
    });
  });

  it('returns defaults for Origin-Agent-Cluster when nothing is specified', function test() {
    const fortifiedHeaders = fortifyHeaders({
      originAgentCluster: { enable: true },
    });

    expect(fortifiedHeaders).toEqual({
      'Origin-Agent-Cluster': '?1',
    });
  });

  it('returns defaults for Origin-Agent-Cluster when enabled is set to false', function test() {
    const fortifiedHeaders = fortifyHeaders({
      originAgentCluster: { enable: false },
    });

    expect(fortifiedHeaders).toEqual({
      'Origin-Agent-Cluster': '?0',
    });
  });
});
