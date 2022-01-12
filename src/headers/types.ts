// single base interface to simplify generic types
export interface FortifyHeader {}

/**
 * The general shape of a header return value
 */
type HeaderObject = { [key: string]: string };

/**
 * Represents the entry function to a header module
 */
export type HeaderFunction = (settings: FortifyHeader) => HeaderObject;
