import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { WorldsService } from '../services/worlds.service';
import { ApiTags } from '@nestjs/swagger';
import { WorldRequestDto } from '../dtos/world-request.dto';
import { World } from '../world/world.model';
import { WorldResponseDto } from '../dtos/world-response.dto';

@ApiTags('worlds')
@Controller('worlds')
export class WorldsController {
  constructor(private readonly worldService: WorldsService) {}

  @Get()
  async findAll(): Promise<WorldRequestDto[]> {
    const worlds: World[] = await this.worldService.findAll();
    return worlds.map((world) => this.convertModelToDto(world));
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<WorldRequestDto> {
    const world: World = await this.worldService.findOne(id);
    return this.convertModelToDto(world);
  }

  @Post()
  async create(
    @Body() worldRequestDto: WorldRequestDto,
  ): Promise<WorldRequestDto> {
    let world: World = this.convertDtoToModel(worldRequestDto);
    world = await this.worldService.create(world);
    return this.convertModelToDto(world);
  }

  private convertDtoToModel(worldRequestDto: WorldRequestDto): World {
    const { id, name, levels } = worldRequestDto;
    return new World({ id, name, levels });
  }

  private convertModelToDto(world: World): WorldResponseDto {
    const { id, name, levels } = world;
    return new WorldResponseDto({ id, name, levels });
  }
}
