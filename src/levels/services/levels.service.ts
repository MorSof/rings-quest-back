import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Level } from '../../db/level.entity';

@Injectable()
export class LevelsService {
  constructor(
    @InjectRepository(Level)
    private readonly levelsRepository: Repository<Level>,
  ) {}

  async findAll(): Promise<Level[]> {
    return this.levelsRepository.find();
  }

  async findOne(id: number): Promise<Level> {
    return this.levelsRepository.findOneBy({ id });
  }

  async create(level: Level): Promise<Level> {
    return this.levelsRepository.save(level);
  }

  async update(id: number, level: Level): Promise<void> {
    await this.levelsRepository.update(id, level);
  }

  async delete(id: number): Promise<void> {
    await this.levelsRepository.delete(id);
  }
}
