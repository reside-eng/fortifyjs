import { FortifyHeader } from '../types';

export interface StrictTransportSecurity extends FortifyHeader {
  maxAge?: number;
  includeSubDomains?: boolean;
  preload?: boolean;
}
