const HEADER_NAME = 'X-XSS-Protection'

export function xXssProtection() {
  return {
    [HEADER_NAME]: '0'
  }
}
