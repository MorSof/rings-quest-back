import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LevelsController } from './controllers/levels.controller';
import { LevelsService } from './services/levels.service';
import { LevelEntity } from '../../db';
import { LevelsEntityConverter } from './services/levels-entity.converter';
import { LevelsDtoConverter } from './services/levels-dto.converter';

@Module({
  controllers: [LevelsController],
  providers: [LevelsService, LevelsEntityConverter, LevelsDtoConverter],
  imports: [TypeOrmModule.forFeature([LevelEntity])],
  exports: [LevelsService, LevelsEntityConverter, LevelsDtoConverter],
})
export class LevelsModule {}
