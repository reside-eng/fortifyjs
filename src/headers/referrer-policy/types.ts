import { FortifyHeader } from '../types';

export interface ReferrerPolicy extends FortifyHeader {
  noReferrer?: boolean;
  noReferrerWhenDowngrade?: boolean;
  sameOrigin?: boolean;
  origin?: boolean;
  strictOrigin?: boolean;
  originWhenCrossOrigin?: boolean;
  strictOriginWhenCrossOrigin?: boolean;
  unsafeUrl?: boolean;
}
