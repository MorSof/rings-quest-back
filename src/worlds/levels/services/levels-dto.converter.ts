import { Injectable } from '@nestjs/common';
import { Level } from '../models/level.model';
import { LevelRequestDto } from '../dtos/level-request.dto';
import { LevelResponseDto } from '../dtos/level-response.dto';
import { ComboDtoConverter } from '../combo/services/combo-dto.converter';
import { GoalDtoConverter } from '../goals/services/goal-dto.converter';

@Injectable()
export class LevelsDtoConverter {
  constructor(
    private readonly comboDtoConverter: ComboDtoConverter,
    private readonly goalDtoConverter: GoalDtoConverter,
  ) {}

  public convertFrom(levelDto: LevelRequestDto): Level {
    const { id, playables, lives, combo, worldId, goals } = levelDto;
    return new Level({
      id,
      playables,
      lives,
      worldId,
      combo: this.comboDtoConverter.convertFrom(combo),
      goals: goals.map((goal) => this.goalDtoConverter.convertFrom(goal)),
    });
  }

  public convertTo(level: Level): LevelResponseDto {
    const { id, playables, lives, combo, worldId, stats, goals } = level;
    return new LevelResponseDto({
      id,
      playables,
      lives,
      combo,
      worldId,
      stats,
      goals,
    });
  }
}
