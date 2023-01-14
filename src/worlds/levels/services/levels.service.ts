import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Level } from '../models/level.model';
import { LevelEntity } from '../../../db';

@Injectable()
export class LevelsService {
  constructor(
    @InjectRepository(LevelEntity)
    private readonly levelsRepository: Repository<LevelEntity>,
  ) {}

  async findOne(worldId: number, id: number): Promise<Level> {
    const levelEntity: LevelEntity = await this.levelsRepository.findOne({
      where: { worldId, id },
    });
    return this.convertLevelEntityToLevelModel(levelEntity);
  }

  async findAll(worldId: number): Promise<Level[]> {
    const levelEntities: LevelEntity[] = await this.levelsRepository.find({
      where: { worldId },
    });
    return levelEntities?.map((levelEntity) =>
      this.convertLevelEntityToLevelModel(levelEntity),
    );
  }

  async create(worldId: number, level: Level): Promise<Level> {
    level.worldId = worldId;
    let levelEntity: LevelEntity = this.convertLevelModelToLevelEntity(level);
    levelEntity = await this.levelsRepository.save(levelEntity);
    return this.convertLevelEntityToLevelModel(levelEntity);
  }

  async createAll(worldId: number, levels: Level[]): Promise<Level[]> {
    let levelEntities: LevelEntity[] = levels?.map((level) => {
      level.worldId = worldId;
      return this.convertLevelModelToLevelEntity(level);
    });
    levelEntities = await this.levelsRepository.save(levelEntities);
    return levelEntities?.map((levelEntity) =>
      this.convertLevelEntityToLevelModel(levelEntity),
    );
  }

  async update(worldId: number, id: number, level: Level): Promise<Level> {
    level.worldId = worldId;
    level.id = id;
    const levelEntity: LevelEntity = this.convertLevelModelToLevelEntity(level);
    return this.levelsRepository.save(levelEntity);
  }

  async remove(worldId: number, id: number): Promise<void> {
    await this.levelsRepository.delete({ worldId, id });
  }

  public convertLevelEntityToLevelModel(levelEntity: LevelEntity): Level {
    const { id, playables, scoreGoal, combo, worldId } = levelEntity;
    return new Level({ id, playables, scoreGoal, combo, worldId });
  }

  public convertLevelModelToLevelEntity(level: Level): LevelEntity {
    const { id, playables, scoreGoal, combo, worldId } = level;
    return new LevelEntity({ id, playables, scoreGoal, combo, worldId });
  }
}
