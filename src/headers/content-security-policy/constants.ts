const fetchDirectives: ReadonlyArray<string> = [
  'child-src',
  'connect-src',
  'default-src',
  'font-src',
  'frame-src',
  'img-src',
  'manifest-src',
  'media-src',
  'object-src',
  'prefetch-src',
  'script-src',
  'script-src-elem',
  'script-src-attr',
  'style-src',
  'style-src-elem',
  'worker-src',
];

const documentDirectives: ReadonlyArray<string> = ['base-uri', 'sandbox'];

const navigationDirectives: ReadonlyArray<string> = [
  'form-action',
  'frame-ancestors',
  'navigate-to',
];

const reportingDirectives: ReadonlyArray<string> = ['report-to'];

const otherDirectives: ReadonlyArray<string> = ['upgrade-insecure-requests'];

export const availableDirectives = [
  ...fetchDirectives,
  ...documentDirectives,
  ...navigationDirectives,
  ...reportingDirectives,
  ...otherDirectives,
];
