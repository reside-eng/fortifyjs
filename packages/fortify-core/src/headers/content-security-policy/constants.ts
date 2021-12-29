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
  'script-src-elem',
  'script-src-attr',
  'style-src',
  'style-src-elem',
  'worker-src',
];

export const sandboxDirectiveValues = [
  'allow-downloads',
  'allow-downloads-without-user-activation',
  'allow-forms',
  'allow-modals',
  'allow-orientation-lock',
  'allow-pointer-lock',
  'allow-popups',
  'allow-popups-to-escape-sandbox',
  'allow-presentation',
  'allow-same-origin',
  'allow-scripts',
  'allow-storage-access-by-user-activation',
  'allow-top-navigation',
  'allow-top-navigation-by-user-activation',
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
