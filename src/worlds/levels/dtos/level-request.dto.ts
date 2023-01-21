import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { ComboRequestDto } from './combo-request.dto';
import { PlayablesRequestDto } from './playables-request.dto';
import { GoalRequestDto } from './goal-request.dto';

export class LevelRequestDto {
  @ApiModelProperty({ type: 'integer', description: 'The ID of the level' })
  id: number;

  @ApiModelProperty({
    isArray: true,
    type: PlayablesRequestDto,
    description: 'An array of playables for the level',
  })
  playables: PlayablesRequestDto[];

  @ApiModelProperty({
    isArray: true,
    type: GoalRequestDto,
    description: 'An array of goals for the level',
  })
  goals: GoalRequestDto[];

  @ApiModelProperty({
    type: 'number',
    description: 'The score goal for the level',
  })
  lives: number;

  @ApiModelProperty({
    description: 'The combo for the level',
  })
  combo: ComboRequestDto;

  @ApiModelProperty({
    type: 'number',
    description: 'The ID of the models the level belongs to',
    nullable: true,
  })
  worldId: number;
}
