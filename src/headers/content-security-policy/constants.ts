const fetchDirectives = [
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

const documentDirectives = ['base-uri', 'sandbox'];

const navigationDirectives = ['form-action', 'frame-ancestors', 'navigate-to'];

const reportingDirectives = ['report-to'];

const otherDirectives = ['upgrade-insecure-requests'];

export const availableDirectives = [
  ...fetchDirectives,
  ...documentDirectives,
  ...navigationDirectives,
  ...reportingDirectives,
  ...otherDirectives,
];
