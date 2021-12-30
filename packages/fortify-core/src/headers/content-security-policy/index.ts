import { ContentSecurityPolicy } from './types';
import { availableDirectives } from './constants';
import { camelcaseToKebab } from '../../directives/normalize';
import { applyDefaultsIfNecessary } from '../../directives/defaults';

const HEADER_NAME = 'Content-Security-Policy';

const ALLOWED_DIRECTIVES = new Set(availableDirectives);

/**
 * @function validateDirectiveValue ensures the value for the directive will not contain any characters
 * required to make the policy valid
 * @param value represents the final value of the directive
 * @returns representing invalidity
 */
function validateDirectiveValue(value: string) {
  return /;|,/.test(value);
}

/**
 * @function constructValue takes the final value array of string that will be joined to construct the CSP
 * and runs it through one final validation to ensure that it does not contain invalid characters
 * @param values represents the array of strings containing the values to join with a semi-colon
 * @returns string representing the final value for the CSP
 * @throws if values exist containing ;|,
 */
function constructValue(values: string[]): string {
  const validated = values.map(function validate(value) {
    const invalidValue = validateDirectiveValue(value);
    if (invalidValue) {
      throw new Error(
        `${HEADER_NAME} contains invalid characters that malform the Content-Security-Policy value ${JSON.stringify(
          value,
        )}.
          Please remove any ;|, characters.`,
      );
    }
    return value;
  });

  return validated.join(' ');
}

/**
 * @function processDirectiveArray ensures that there are no empty values in our directive configurations
 * and sends them to be constructed to the final policy value
 * @param values the string array of the directive values specified by the user
 * @param directive is the camel-cased name of the property on the CSP config
 * @returns final directive value
 * @throws when there is an empty value present
 */
function processDirectiveArray(values: string[], directive: string) {
  const containsEmpty = values.find(function findEmptyValue(value) {
    return !value;
  });

  if (!values || containsEmpty || values.length === 0) {
    throw new Error(
      `${HEADER_NAME}.${directive} does not allow for undefined members of the directive. Please set the directive policy values or remove it from your configuration.`,
    );
  }

  return constructValue(values);
}

/**
 * @function generatePolicy takes the directive settings from the fortify config and returns the Content-Security-Policy
 * header
 * @param directives is the directives either from the FortifySettings or from the default values in this module
 * @returns the final value of the Content-Security-Policy header
 * @throws if directive is not supported
 */
function generatePolicy(directives: ContentSecurityPolicy) {
  const result: string[] = [];
  Object.entries(directives).forEach(function getDirective([
    directive,
    values,
  ]) {
    const directiveName = camelcaseToKebab(directive);
    if (!ALLOWED_DIRECTIVES.has(directive)) {
      throw new Error(
        `${HEADER_NAME} received an invalid directive name ${JSON.stringify(
          directive,
        )}`,
      );
    }

    if (typeof values === 'boolean') {
      result.push(directiveName);
    } else {
      const directiveValue = processDirectiveArray(
        values as string[],
        directive,
      );
      result.push(`${directiveName} ${directiveValue}`);
    }
  });

  return {
    [HEADER_NAME]: result.join('; '),
  };
}

/**
 * @function contentSecurityPolicy initiates generation of a default or user-specified Content-Security-Policy
 * @param settings represents the user-specified header configuration
 * @returns an object containing the Content-Security-Policy header
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

  return generatePolicy(headerConfig);
}
