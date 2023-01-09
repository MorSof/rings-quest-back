import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { World } from '../../db';

export class WorldsService {
  constructor(
    @InjectRepository(World)
    private readonly worldRepository: Repository<World>,
  ) {}

  async findAll(): Promise<World[]> {
    return this.worldRepository.find();
  }

  async findOne(id: number): Promise<World> {
    return this.worldRepository.findOneBy({ id });
  }

  async create(world: World): Promise<World> {
    return this.worldRepository.save(world);
  }
}
