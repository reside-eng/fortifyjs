import { FortifyHeader } from '../types';

export interface ExpectCt extends FortifyHeader {
  maxAge?: number;
  enforce?: boolean;
  reportUri?: string;
}
