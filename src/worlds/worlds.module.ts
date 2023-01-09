import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Level, World } from '../db';
import { WorldsController } from './controllers/worlds.controller';
import { WorldsService } from './services/worlds.service';

@Module({
  controllers: [WorldsController],
  providers: [WorldsService],
  imports: [TypeOrmModule.forFeature([World, Level])],
})
export class WorldsModule {}
