import { LevelResponseDto } from '../levels/dtos/level-response.dto';

export class WorldResponseDto {
  id: number;
  name: string;
  levels: LevelResponseDto[];

  constructor(partial: Partial<WorldResponseDto>) {
    Object.assign(this, partial);
  }
}
