import { ResourceResponseDto } from '../../../../../core/resources/dtos/resource-response.dto';

export class BarResponseDto {
  constructor(partial: Partial<BarResponseDto>) {
    Object.assign(this, partial);
  }

  goal: number;
  rewards: ResourceResponseDto[];
}
