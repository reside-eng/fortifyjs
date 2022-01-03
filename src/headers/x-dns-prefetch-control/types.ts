import { FortifyHeader } from '../types';

export interface XDnsPrefetchControl extends FortifyHeader {
  on?: boolean;
  off?: boolean;
}
