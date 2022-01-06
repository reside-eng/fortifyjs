import { applyDefaultsIfNecessary } from '../../directives/defaults';

describe('./src/directives/defaults.ts', function defaultDirectivesTest() {
  it('returns defaults when settings are empty', function test() {
    const settings = applyDefaultsIfNecessary({}, { defaultProp: 1 });

    expect(settings).toEqual({ defaultProp: 1 });
  });

  it('returns settings when not empty', function test() {
    const setting = applyDefaultsIfNecessary(
      { assignedProp: 1 },
      { defaultProp: 1 },
    );

    expect(setting).toEqual({ assignedProp: 1 });
  });
});
