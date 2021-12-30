import { FortifyHeader } from '../types';

export interface XFrameOptions extends FortifyHeader {
  enableFraming: string;
}
