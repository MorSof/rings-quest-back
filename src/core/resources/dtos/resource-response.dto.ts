export class ResourceResponseDto {
  type: string;
  name: string;
  amount: number;

  constructor(partial: Partial<ResourceResponseDto>) {
    Object.assign(this, partial);
  }
}
