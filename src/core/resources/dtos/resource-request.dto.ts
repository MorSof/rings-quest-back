import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { ResourceTypesEnum } from '../models/resourceTypes.enum';
import { CurrencyNamesEnum } from '../models/currencyNamesEnum';
import { BoosterNamesEnum } from '../models/boosterNamesEnum';
import { IsEnum } from 'class-validator';

export class ResourceRequestDto {
  @IsEnum(ResourceTypesEnum)
  @ApiModelProperty({
    enum: Object.values(ResourceTypesEnum),
    description: 'The type of the resource',
  })
  type: ResourceTypesEnum;

  @IsEnum(BoosterNamesEnum)
  @ApiModelProperty({
    enum: [
      ...Object.values(BoosterNamesEnum),
      ...Object.values(CurrencyNamesEnum),
    ],
    description: 'The name of the resource',
  })
  name: BoosterNamesEnum | CurrencyNamesEnum;

  @ApiModelProperty({
    type: 'number',
    description: 'The amount of the resource',
  })
  amount: number;
}
