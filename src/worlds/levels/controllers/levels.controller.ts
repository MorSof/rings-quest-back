import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Put,
} from '@nestjs/common';
import { LevelsService } from '../services/levels.service';
import { Level } from '../models/level.model';
import { ApiTags } from '@nestjs/swagger';
import { LevelRequestDto } from '../dtos/level-request.dto';
import { LevelResponseDto } from '../dtos/level-response.dto';

@ApiTags('levels')
@Controller('worlds/:worldId/levels')
export class LevelsController {
  constructor(private readonly levelsService: LevelsService) {}

  @Get(':id')
  async findOne(
    @Param('worldId') worldId: number,
    @Param('id') id: number,
  ): Promise<LevelResponseDto> {
    const level: Level = await this.levelsService.findOne(worldId, id);
    return this.convertModelToDto(level);
  }

  @Get()
  async findAll(
    @Param('worldId') worldId: number,
  ): Promise<LevelResponseDto[]> {
    const levels: Level[] = await this.levelsService.findAll(worldId);
    return levels.map((level) => this.convertModelToDto(level));
  }

  @Post()
  async create(
    @Param('worldId') worldId: number,
    @Body() levelRequestDto: LevelRequestDto,
  ): Promise<LevelResponseDto> {
    const level: Level = await this.levelsService.create(
      worldId,
      this.convertDtoToModel(levelRequestDto),
    );
    return this.convertModelToDto(level);
  }

  @Put()
  async update(
    @Param('worldId') worldId: number,
    @Param('id') id: number,
    @Body() levelRequestDto: LevelRequestDto,
  ): Promise<LevelResponseDto> {
    const level: Level = await this.levelsService.update(
      worldId,
      id,
      this.convertDtoToModel(levelRequestDto),
    );
    return this.convertModelToDto(level);
  }

  @Delete(':id')
  async remove(
    @Param('worldId') worldId: number,
    @Param('id') id: number,
  ): Promise<void> {
    return this.levelsService.remove(worldId, id);
  }

  private convertDtoToModel(levelDto: LevelRequestDto): Level {
    const { id, playables, scoreGoal, combo, worldId } = levelDto;
    return new Level({ id, playables, scoreGoal, combo, worldId });
  }

  private convertModelToDto(level: Level): LevelResponseDto {
    const { id, playables, scoreGoal, combo, worldId } = level;
    return new LevelResponseDto({ id, playables, scoreGoal, combo, worldId });
  }
}
