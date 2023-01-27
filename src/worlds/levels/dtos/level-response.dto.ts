import { ComboResponseDto } from '../combo/dtos/combo-response.dto';
import { GoalResponseDto } from '../goals/dtos/goal-response.dto';

export class LevelResponseDto {
  id: number;
  playables: {
    type: string;
    name: string;
    subType?: string;
    duration: number;
    cooldown: number;
    vertices: number[];
    score: number;
  }[];
  stats: {
    playables: {
      countByName: object;
      total: number;
    };
  };
  lives: number;
  combo: ComboResponseDto;
  goals: GoalResponseDto[];
  worldId: number;

  constructor(partial: Partial<LevelResponseDto>) {
    Object.assign(this, partial);
  }
}
