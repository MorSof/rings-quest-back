import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class ResourceRequestDto {
  @ApiModelProperty({
    type: 'string',
    description: 'The type of the resource',
  })
  type: string;

  @ApiModelProperty({
    type: 'string',
    description: 'The name of the resource',
  })
  name: string;

  @ApiModelProperty({
    type: 'number',
    description: 'The amount of the resource',
  })
  amount: number;
}
