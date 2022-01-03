import { fortifyHeaders } from '..'

describe('fortify-core entrypoint tests', function fortifyCoreEntrypointTests() {
  it('returns defaults to caller when no properties exist on incoming object', function test() {
    return fortifyHeaders({});
  });
});
