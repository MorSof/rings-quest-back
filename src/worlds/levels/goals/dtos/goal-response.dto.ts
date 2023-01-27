import { ResourceResponseDto } from '../../../../core/resources/dtos/resource-response.dto';

export class GoalResponseDto {
  constructor(partial: Partial<GoalResponseDto>) {
    Object.assign(this, partial);
  }

  score: number;
  rewards: ResourceResponseDto[];
}
