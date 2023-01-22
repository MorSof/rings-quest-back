export class Resource {
  id?: string;
  type: string;
  name: string;
  amount: number;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(partial: Partial<Resource>) {
    Object.assign(this, partial);
  }
}
