import {ContentSecurityPolicy} from "./types";
import { availableDirectives } from "./constants";

const HEADER_NAME = 'Content-Security-Policy'

const DEFAULT_DIRECTIVES: Object = {
  defaultSrc: ["'self'"],
  baseUri: ["'self'"],
  fontSrc: ["'self'", "https:", "data:"],
  frameAncestors: ["'self'"],
  imgSrc: ["'self'", "data:"],
  objectSrc: ["'none'"],
  scriptSrc: ["'self'"],
  scriptSrcAttr: ["'none'"],
  styleSrc: ["'self'", "https:", "'unsafe-inline'"],
  upgradeInsecureRequests: true,
};

const ALLOWED_DIRECTIVES = new Set(availableDirectives)

function validateDirectiveValue(value: string) {
  return /;|,/.test(value)
}

function constructValue(directive: string, values: string[]): string {
  const validated = values.map(function validate(value) {
    const invalidValue = validateDirectiveValue(value)
    if (invalidValue) {
      throw new Error(

      )
    }
  })

  return validated.join(' ')
}

function dashify (str: string): string {
  return str.replace(/[A-Z]/g, (capitalLetter) => "-" + capitalLetter.toLowerCase());
}

function generatePolicy(directives: Object) {
  const result = new Array();
  Object.entries(directives).forEach(function getDirective([directive, values]) {
    const directiveName = dashify(directive)
    if (!ALLOWED_DIRECTIVES.has(directive)) {
      throw new Error(
        `${HEADER_NAME} received an invalid directive name ${JSON.stringify(directive)}`
      )
    }

    const containsEmpty = values.reduce(function checkForEmpty(previousValue: boolean, currentValue: unknown) {
      return previousValue && !currentValue
    })

    if (!values || containsEmpty || values.length === 0) {
      throw new Error(
        `${HEADER_NAME}.${directive} does not allow for undefined members of the directive. Please set the directive policy values or remove it from your configuration.`
      )
    }

    if (typeof values === 'boolean') {
      result.push(directiveName)
    } else {
      const directiveValue = constructValue(directive, values)
      result.push(`${directiveName} ${directiveValue}`)
    }
  })

  return {
    [HEADER_NAME]: result.join('; ')
  }
}

function getDefaultDirectivePolicy() {
  const directives = DEFAULT_DIRECTIVES
  return generatePolicy(directives)
}

export function contentSecurityPolicy({ directives }: ContentSecurityPolicy) {
  if (!directives) {
    // use defaults, because they initialized the content security policy in some way
    // but didn't specify a desired outcome
    return getDefaultDirectivePolicy()
  }

  return generatePolicy(directives)
}
