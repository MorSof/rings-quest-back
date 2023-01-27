import { ResourceTypesEnum } from './resourceTypes.enum';
import { BoosterNamesEnum } from './boosterNamesEnum';
import { CurrencyNamesEnum } from './currencyNamesEnum';

export class Resource {
  id?: string;
  type: ResourceTypesEnum;
  name: BoosterNamesEnum | CurrencyNamesEnum;
  amount: number;
  ownerType?: string;
  ownerId?: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(partial: Partial<Resource>) {
    Object.assign(this, partial);
  }
}
