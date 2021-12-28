const HEADER_NAME = 'X-Content-Type-Options'

export function xContentTypeOptions() {
  return {
    [HEADER_NAME]: 'nosniff'
  }
}
