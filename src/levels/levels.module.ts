import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Level } from '../db';
import { LevelsController } from './controllers/levels.controller';
import { LevelsService } from './services/levels.service';

@Module({
  controllers: [LevelsController],
  providers: [LevelsService],
  imports: [TypeOrmModule.forFeature([Level])],
})
export class LevelsModule {}
