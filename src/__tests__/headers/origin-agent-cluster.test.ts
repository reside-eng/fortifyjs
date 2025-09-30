import { describe, expect, it } from 'vitest';
import { fortifyHeaders } from '../..';

describe('Origin-Agent-Cluster Tests', () => {
  it('returns defaults for Origin-Agent-Cluster when nothing is specified', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        originAgentCluster: {},
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'Origin-Agent-Cluster': '?1',
    });
  });

  it('returns defaults for Origin-Agent-Cluster when nothing is specified', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        originAgentCluster: { enable: true },
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'Origin-Agent-Cluster': '?1',
    });
  });

  it('returns defaults for Origin-Agent-Cluster when enabled is set to false', () => {
    const fortifiedHeaders = fortifyHeaders(
      {
        originAgentCluster: { enable: false },
      },
      { useDefaults: false },
    );

    expect(fortifiedHeaders).toEqual({
      'Origin-Agent-Cluster': '?0',
    });
  });
});
