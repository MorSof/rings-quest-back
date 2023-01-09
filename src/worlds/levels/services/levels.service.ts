import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Level } from '../../../db';

@Injectable()
export class LevelsService {
  constructor(
    @InjectRepository(Level)
    private readonly levelsRepository: Repository<Level>,
  ) {}

  async findOne(worldId: number, id: number): Promise<Level> {
    return this.levelsRepository.findOne({ where: { worldId, id } });
  }

  async findAll(worldId: number): Promise<Level[]> {
    return this.levelsRepository.find({ where: { worldId } });
  }

  async create(worldId: number, level: Level): Promise<Level> {
    level.worldId = worldId;
    return this.levelsRepository.save(level);
  }

  async update(worldId: number, id: number, level: Level): Promise<Level> {
    level.worldId = worldId;
    level.id = id;
    return this.levelsRepository.save(level);
  }

  async remove(worldId: number, id: number): Promise<void> {
    await this.levelsRepository.delete({ worldId, id });
  }
}
