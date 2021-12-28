import {XDnsPretechControl} from "./types"

const HEADER_NAME = 'X-DNS-Prefetch-Control'

export function xDnsPrefetchControl({ allow }: XDnsPretechControl) {
  const headerValue = allow ? 'on' : 'off'

  return {
    [HEADER_NAME]: headerValue,
  }
}
