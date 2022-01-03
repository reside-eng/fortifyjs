import { FortifyHeader } from '../types';

export interface CrossOriginOpenerPolicy extends FortifyHeader {
  sameOrigin?: boolean;
  sameOriginAllowPopups?: boolean;
  unsafeNone?: boolean;
}
