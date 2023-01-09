import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Level, World } from '../../db';

export class WorldsService {
  constructor(
    @InjectRepository(World)
    private readonly worldRepository: Repository<World>,
    @InjectRepository(Level)
    private readonly levelRepository: Repository<Level>,
  ) {}

  async findAll(): Promise<World[]> {
    return this.worldRepository.find();
  }

  async findOne(id: number): Promise<World> {
    return this.worldRepository.findOneBy({ id });
  }

  async findLevels(id: number): Promise<Level[]> {
    return this.levelRepository.find({ where: { id: id } });
  }

  async create(world: World): Promise<World> {
    return this.worldRepository.save(world);
  }

  async createLevel(id: number, level: Level): Promise<Level> {
    level.world = { id: id } as World;
    return this.levelRepository.save(level);
  }
}
