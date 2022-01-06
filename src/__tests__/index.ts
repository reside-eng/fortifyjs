import { fortifyHeaders } from '..';

describe('fortify-core entrypoint tests', function fortifyCoreEntrypointTests() {
  describe('failed-states', function failedStates() {
    it('throws when a property is on config that does not map to a header', function test() {
      // potential untyped JavaScript consumption
      expect(() =>
        fortifyHeaders({ unknownHeader: ['SAMEORIGIN'] } as Record<
          string,
          string[] | boolean
        >),
      ).toThrowErrorMatchingInlineSnapshot(
        `"unknownHeader is not a supported header"`,
      );
    });
  });
});
