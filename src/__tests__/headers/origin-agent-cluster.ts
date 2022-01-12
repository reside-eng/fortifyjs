import { fortifyHeaders } from '../..';

describe('Origin-Agent-Cluster Tests', () => {
  it('returns defaults for Origin-Agent-Cluster when nothing is specified', () => {
    const fortifiedHeaders = fortifyHeaders({
      originAgentCluster: {},
    });

    expect(fortifiedHeaders).toEqual({
      'Origin-Agent-Cluster': '?1',
    });
  });

  it('returns defaults for Origin-Agent-Cluster when nothing is specified', () => {
    const fortifiedHeaders = fortifyHeaders({
      originAgentCluster: { enable: true },
    });

    expect(fortifiedHeaders).toEqual({
      'Origin-Agent-Cluster': '?1',
    });
  });

  it('returns defaults for Origin-Agent-Cluster when enabled is set to false', () => {
    const fortifiedHeaders = fortifyHeaders({
      originAgentCluster: { enable: false },
    });

    expect(fortifiedHeaders).toEqual({
      'Origin-Agent-Cluster': '?0',
    });
  });
});
