const HEADER_NAME = 'X-Download-Options'

export function xDownloadOptions() {
  return {
    [HEADER_NAME]: 'noopen',
  }
}
