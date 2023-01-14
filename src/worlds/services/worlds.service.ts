import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LevelEntity, WorldEntity } from '../../db';
import { World } from '../world/world.model';
import { Level } from '../levels/models/level.model';
import { LevelsService } from '../levels/services/levels.service';

export class WorldsService {
  constructor(
    @InjectRepository(WorldEntity)
    private readonly worldRepository: Repository<WorldEntity>,
    private levelsService: LevelsService,
  ) {}

  async findAll(): Promise<World[]> {
    const worldEntities: WorldEntity[] = await this.worldRepository.find({
      relations: { levels: true },
    });
    return worldEntities?.map((worldEntity) =>
      this.convertEntityToModel(worldEntity),
    );
  }

  async findOne(id: number): Promise<World> {
    const worldEntity: WorldEntity = await this.worldRepository.findOne({
      where: { id },
      relations: { levels: true },
    });
    return this.convertEntityToModel(worldEntity);
  }

  async create(world: World): Promise<World> {
    let worldEntity: WorldEntity = this.convertModelToEntity(world);
    worldEntity = await this.worldRepository.save(worldEntity);
    if (world.levels) {
      await this.levelsService.createAll(worldEntity.id, world.levels);
    }
    return this.convertEntityToModel(worldEntity);
  }

  private convertEntityToModel(worldEntity: WorldEntity): World {
    const { id, name, levels: levelsEntities } = worldEntity;
    const levels: Level[] = levelsEntities?.map((levelEntity) =>
      this.levelsService.convertLevelEntityToLevelModel(levelEntity),
    );
    return new World({ id, name, levels });
  }

  private convertModelToEntity(world: World): WorldEntity {
    const { id, name, levels } = world;
    const levelEntities: LevelEntity[] = levels?.map((level) =>
      this.levelsService.convertLevelModelToLevelEntity(level),
    );
    return new WorldEntity({ id, name, levels: levelEntities });
  }
}
