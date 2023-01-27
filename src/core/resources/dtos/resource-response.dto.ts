import { ResourceTypesEnum } from '../models/resourceTypes.enum';
import { CurrencyNamesEnum } from '../models/currencyNamesEnum';
import { BoosterNamesEnum } from '../models/boosterNamesEnum';

export class ResourceResponseDto {
  type: ResourceTypesEnum;
  name: BoosterNamesEnum | CurrencyNamesEnum;
  amount: number;

  constructor(partial: Partial<ResourceResponseDto>) {
    Object.assign(this, partial);
  }
}
