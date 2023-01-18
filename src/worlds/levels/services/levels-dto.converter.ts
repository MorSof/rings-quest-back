import { Injectable } from '@nestjs/common';
import { Level } from '../models/level.model';
import { LevelRequestDto } from '../dtos/level-request.dto';
import { LevelResponseDto } from '../dtos/level-response.dto';

@Injectable()
export class LevelsDtoConverter {
  public convertFrom(levelDto: LevelRequestDto): Level {
    const { id, playables, scoreGoal, combo, worldId } = levelDto;
    return new Level({ id, playables, scoreGoal, combo, worldId });
  }

  public convertTo(level: Level): LevelResponseDto {
    const { id, playables, scoreGoal, combo, worldId, stats } = level;
    return new LevelResponseDto({
      id,
      playables,
      scoreGoal,
      combo,
      worldId,
      stats,
    });
  }
}
