import { Level } from '../levels/models/level.model';

export class WorldResponseDto {
  id: number;
  name: string;
  levels: Level[];

  constructor(partial: Partial<WorldResponseDto>) {
    Object.assign(this, partial);
  }
}
