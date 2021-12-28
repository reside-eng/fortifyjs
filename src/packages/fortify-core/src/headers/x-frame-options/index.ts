import {XFrameOptions} from "./types";

const HEADER_NAME = 'X-Frame-Options'

const ALLOWED_ACTIONS = new Set(['DENY', 'SAMEORIGIN'])

export function xFrameOptions({ action }: XFrameOptions) {
  if (!ALLOWED_ACTIONS.has(action)) {
    throw new Error(
      `${HEADER_NAME} received an invalid action ${JSON.stringify(action)}`
    )
  }

  return {
    [HEADER_NAME]: action,
  }
}
