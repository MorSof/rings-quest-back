import { ResourceResponseDto } from '../../core/resources/dtos/resource-response.dto';

export class UserResponseDto {
  id?: string;
  name?: string;
  email?: string;
  storage?: ResourceResponseDto[];

  constructor(partial: Partial<UserResponseDto>) {
    Object.assign(this, partial);
  }
}
