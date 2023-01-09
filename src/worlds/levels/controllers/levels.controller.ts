import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { LevelsService } from '../services/levels.service';
import { Level } from '../../../db';

@Controller('worlds/:worldId/levels')
export class LevelsController {
  constructor(private readonly levelsService: LevelsService) {}

  @Get(':id')
  async findOne(
    @Param('worldId') worldId: number,
    @Param('id') id: number,
  ): Promise<Level> {
    return this.levelsService.findOne(worldId, id);
  }

  @Get()
  async findAll(@Param('worldId') worldId: number): Promise<Level[]> {
    return this.levelsService.findAll(worldId);
  }

  @Post()
  async create(
    @Param('worldId') worldId: number,
    @Body() level: Level,
  ): Promise<Level> {
    return this.levelsService.create(worldId, level);
  }

  @Delete(':id')
  async remove(
    @Param('worldId') worldId: number,
    @Param('id') id: number,
  ): Promise<void> {
    return this.levelsService.remove(worldId, id);
  }
}
