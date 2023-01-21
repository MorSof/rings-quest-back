import { Injectable } from '@nestjs/common';
import { Level } from '../models/level.model';
import { LevelRequestDto } from '../dtos/level-request.dto';
import { LevelResponseDto } from '../dtos/level-response.dto';

@Injectable()
export class LevelsDtoConverter {
  public convertFrom(levelDto: LevelRequestDto): Level {
    const { id, playables, lives, combo, worldId, goals } = levelDto;
    return new Level({ id, playables, lives, combo, worldId, goals });
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
