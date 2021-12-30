import { FortifyHeader } from '../types';

export interface XPermittedCrossDomainPolicies extends FortifyHeader {
  none?: boolean;
  masterOnly?: boolean;
  byContentType?: boolean;
  all?: boolean;
}
