import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Level, World } from '../../db';
import { WorldsService } from '../services/worlds.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('worlds')
@Controller('worlds')
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

  @Post()
  async create(@Body() world: World): Promise<World> {
    return this.worldService.create(world);
  }
}
