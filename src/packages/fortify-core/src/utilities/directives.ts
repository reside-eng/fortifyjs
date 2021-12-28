export function maxAge(headerName: string) {
  function directive(value: number): string {
    const isValidMaxAge = value >= 0 && Number.isFinite(value)
    if (!isValidMaxAge) {
      throw new Error(
        `${headerName}: ${JSON.stringify(value)} is not a valid value for maxAge. Please choose a positive, finite integer.`
      )
    }

    return `max-age=${value}`
  }

  return {
    directive,
  }
}

