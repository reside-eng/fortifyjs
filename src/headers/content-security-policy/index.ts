import { ContentSecurityPolicy } from './types';
import { availableDirectives } from './constants';
import { applyDefaultsIfNecessary } from '../../directives/defaults';
import { directiveValidation } from '../../directives/validation';

const HEADER_NAME = 'Content-Security-Policy';

const validation = directiveValidation(HEADER_NAME, {
  allowedDirectives: availableDirectives,
});

/**
 * Initiates generation of a default or user-specified Content-Security-Policy
 */
export function contentSecurityPolicy(settings: ContentSecurityPolicy) {
  const headerConfig = applyDefaultsIfNecessary(settings, {
    defaultSrc: ["'self'"],
    baseUri: ["'self'"],
    fontSrc: ["'self'", 'https:', 'data:'],
    frameAncestors: ["'self'"],
    imgSrc: ["'self'", 'data:'],
    objectSrc: ["'none'"],
    scriptSrc: ["'self'"],
    scriptSrcAttr: ["'none'"],
    styleSrc: ["'self'", 'https:', "'unsafe-inline'"],
    upgradeInsecureRequests: true,
  });

  const headerValue = validation.checkForValidity(headerConfig, 'MANY');

  return {
    [HEADER_NAME]: headerValue,
  };
}
