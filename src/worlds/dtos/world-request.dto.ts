import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { LevelRequestDto } from '../levels/dtos/level-request.dto';
import { getSchemaPath } from '@nestjs/swagger';

export class WorldRequestDto {
  @ApiModelProperty({ type: 'integer', description: 'The ID of the world' })
  id: number;

  @ApiModelProperty({ type: 'string', description: 'The name of the world' })
  name: string;

  @ApiModelProperty({
    type: 'array',
    description: 'The levels in the world',
    items: { $ref: getSchemaPath(LevelRequestDto) },
    nullable: true,
  })
  levels: LevelRequestDto[];
}
