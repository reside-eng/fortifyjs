/* eslint-disable @typescript-eslint/no-empty-interface */

// single base interface to simplify generic types
export interface FortifyHeader {}

type HeaderObject =
  | { [key: string]: string }
  | Partial<{ [key: string]: string }>;
export type HeaderFunction = (settings: FortifyHeader) => HeaderObject;
