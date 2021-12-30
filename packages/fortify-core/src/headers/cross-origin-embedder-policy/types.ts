import { FortifyHeader } from '../types';

export interface CrossOriginEmbedderPolicy extends FortifyHeader {
  requireCorp?: boolean;
}
