import { Injectable } from '@nestjs/common';
import { Level } from '../models/level.model';
import { LevelEntity } from '../../../db';

@Injectable()
export class LevelsEntityConverter {
  public convertFrom(levelEntity: LevelEntity): Level {
    const { id, playables, scoreGoal, combo, worldId, stats } = levelEntity;
    return new Level({ id, playables, scoreGoal, combo, worldId, stats });
  }

  public convertTo(level: Level): LevelEntity {
    const { id, playables, scoreGoal, combo, worldId, stats } = level;
    return new LevelEntity({ id, playables, scoreGoal, combo, worldId, stats });
  }
}
