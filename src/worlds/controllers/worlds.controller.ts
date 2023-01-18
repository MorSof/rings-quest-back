import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { WorldsService } from '../services/worlds.service';
import { ApiTags } from '@nestjs/swagger';
import { WorldRequestDto } from '../dtos/world-request.dto';
import { World } from '../models/world.model';
import { WorldsDtoConverter } from '../services/worlds-dto.converter';

@ApiTags('worlds')
@Controller('worlds')
export class WorldsController {
  constructor(
    private readonly worldService: WorldsService,
    private readonly worldsDtoConverter: WorldsDtoConverter,
  ) {}

  @Get()
  async findAll(): Promise<WorldRequestDto[]> {
    const worlds: World[] = await this.worldService.findAll();
    return worlds.map((world) => this.worldsDtoConverter.convertTo(world));
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<WorldRequestDto> {
    const world: World = await this.worldService.findOne(id);
    return this.worldsDtoConverter.convertTo(world);
  }

  @Post()
  async create(
    @Body() worldRequestDto: WorldRequestDto,
  ): Promise<WorldRequestDto> {
    let world: World = this.worldsDtoConverter.convertFrom(worldRequestDto);
    world = await this.worldService.create(world);
    return this.worldsDtoConverter.convertTo(world);
  }
}
