import { Resource } from '../../../core/resources/models/resource.model';

export interface Goal {
  score: number;
  rewards: Resource[];
}
