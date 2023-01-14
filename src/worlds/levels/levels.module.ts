import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LevelsController } from './controllers/levels.controller';
import { LevelsService } from './services/levels.service';
import { LevelEntity } from '../../db';

@Module({
  controllers: [LevelsController],
  providers: [LevelsService],
  imports: [TypeOrmModule.forFeature([LevelEntity])],
  exports: [LevelsService],
})
export class LevelsModule {}
