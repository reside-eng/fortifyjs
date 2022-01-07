module.exports = {
  '**/*.ts': () => 'tsc -p tsconfig.json --noEmit',
  '*.{json,md}': 'prettier --write',
  '*.{js,ts}': 'eslint --fix',
  '*.{js,jsx,ts,tsx,yaml,yml,json,html,css}': ['prettier --write'],
};
