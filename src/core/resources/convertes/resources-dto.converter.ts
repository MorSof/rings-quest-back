import { Injectable } from '@nestjs/common';
import { Resource } from '../models/resource.model';
import { ResourceRequestDto } from '../dtos/resource-request.dto';
import { ResourceResponseDto } from '../dtos/resource-response.dto';
import { ResourceTypesEnum } from '../models/resourceTypes.enum';
import { BoosterNamesEnum } from '../models/boosterNamesEnum';
import { CurrencyNamesEnum } from '../models/currencyNamesEnum';

@Injectable()
export class ResourcesDtoConverter {
  public convertFrom(resourceRequestDto: ResourceRequestDto): Resource {
    const { name, amount, type } = resourceRequestDto;
    if (
      (type == ResourceTypesEnum.BOOSTER &&
        !Object.values(BoosterNamesEnum).includes(name as BoosterNamesEnum)) ||
      (type == ResourceTypesEnum.CURRENCY &&
        !Object.values(CurrencyNamesEnum).includes(name as CurrencyNamesEnum))
    ) {
      throw new Error(`unsupported resource: ${name}`);
    }
    return new Resource({
      name,
      amount,
      type,
    });
  }

  public convertTo(resource: Resource): ResourceResponseDto {
    const { name, amount, type } = resource;
    return new ResourceResponseDto({ name, amount, type });
  }
}
