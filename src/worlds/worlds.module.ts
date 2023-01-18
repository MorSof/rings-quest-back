import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorldEntity } from '../db';
import { WorldsController } from './controllers/worlds.controller';
import { WorldsService } from './services/worlds.service';
import { LevelsModule } from './levels/levels.module';
import { WorldsEntityConverter } from './services/worlds-entity.converter';
import { WorldsDtoConverter } from './services/worlds-dto.converter';
import { LevelsEntityConverter } from './levels/services/levels-entity.converter';
import { LevelsDtoConverter } from './levels/services/levels-dto.converter';

@Module({
  controllers: [WorldsController],
  providers: [
    WorldsService,
    WorldsEntityConverter,
    WorldsDtoConverter,
    LevelsEntityConverter,
    LevelsDtoConverter,
  ],
  imports: [TypeOrmModule.forFeature([WorldEntity]), LevelsModule],
})
export class WorldsModule {}
