import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class LevelRequestDto {
  @ApiModelProperty({ type: 'integer', description: 'The ID of the level' })
  id: number;

  @ApiModelProperty({
    type: 'array',
    description: 'An array of playables for the level',
    items: {
      type: 'object',
      properties: {
        type: { type: 'string', description: 'The type of playable' },
        subType: { type: 'string', description: 'The subtype of playable' },
        speed: { type: 'number', description: 'The speed of the playable' },
        duration: {
          type: 'number',
          description: 'The duration of the playable',
        },
        cooldown: {
          type: 'number',
          description: 'The cooldown of the playable',
        },
        assetsIds: {
          type: 'array',
          description: 'An array of assets IDs for the playable',
          items: { type: 'number' },
        },
        destinationIds: {
          type: 'array',
          description: 'An array of destination IDs for the playable',
          items: { type: 'number' },
        },
        score: { type: 'number', description: 'The score of the playable' },
      },
    },
  })
  playables: any;

  @ApiModelProperty({
    type: 'number',
    description: 'The score goal for the level',
  })
  scoreGoal: number;

  @ApiModelProperty({
    type: 'object',
    description: 'The combo for the level',
    properties: {
      goal: { type: 'number', description: 'The goal for the combo' },
      rewards: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            type: { type: 'string', description: 'The type of reward' },
            subType: { type: 'string', description: 'The subtype of reward' },
            odd: { type: 'number', description: 'The odd of the reward' },
            amount: { type: 'number', description: 'The amount of the reward' },
          },
        },
      },
    },
  })
  combo: any;

  @ApiModelProperty({
    type: 'number',
    description: 'The ID of the models the level belongs to',
    nullable: true,
  })
  worldId: number;
}
