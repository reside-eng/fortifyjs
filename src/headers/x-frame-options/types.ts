import { FortifyHeader } from '../types';

export interface XFrameOptions extends FortifyHeader {
  sameorigin?: boolean;
  deny?: boolean;
}
