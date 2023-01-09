import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Level, World } from '../../db';
import { WorldsService } from '../services/worlds.service';

@Controller('world')
export class WorldsController {
  constructor(private readonly worldService: WorldsService) {}

  @Get()
  async findAll(): Promise<World[]> {
    return this.worldService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<World> {
    return this.worldService.findOne(id);
  }

  @Get(':id/level')
  async findLevels(@Param('id') id: number): Promise<Level[]> {
    return this.worldService.findLevels(id);
  }

  @Post()
  async create(@Body() world: World): Promise<World> {
    return this.worldService.create(world);
  }

  @Post(':id/level')
  async createLevel(
    @Param('id') id: number,
    @Body() level: Level,
  ): Promise<Level> {
    return this.worldService.createLevel(id, level);
  }
}
