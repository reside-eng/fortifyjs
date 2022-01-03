import { FortifyHeader } from '../types';

export interface CrossOriginResourcePolicy extends FortifyHeader {
  sameOrigin?: boolean;
  sameSite?: boolean;
  crossOrigin?: boolean;
}
