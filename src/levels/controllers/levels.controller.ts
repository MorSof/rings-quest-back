import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Level } from '../../db/level.entity';
import { LevelsService } from '../services/levels.service';

@Controller('levels')
export class LevelsController {
  constructor(private readonly levelsService: LevelsService) {}

  @Get()
  async findAll(): Promise<Level[]> {
    return this.levelsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Level> {
    return this.levelsService.findOne(id);
  }

  @Post()
  async create(@Body() level: Level): Promise<Level> {
    return this.levelsService.create(level);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() level: Level): Promise<void> {
    await this.levelsService.update(id, level);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    await this.levelsService.delete(id);
  }
}
