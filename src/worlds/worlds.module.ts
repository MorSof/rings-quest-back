import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorldEntity } from '../db';
import { WorldsController } from './controllers/worlds.controller';
import { WorldsService } from './services/worlds.service';
import { LevelsModule } from './levels/levels.module';

@Module({
  controllers: [WorldsController],
  providers: [WorldsService],
  imports: [TypeOrmModule.forFeature([WorldEntity]), LevelsModule],
})
export class WorldsModule {}
