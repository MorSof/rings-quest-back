import { Injectable } from '@nestjs/common';
import { UserRequestDto } from '../dtos/user-request.dto';
import { User } from '../models/user.model';
import { UserResponseDto } from '../dtos/user-response.dto';

@Injectable()
export class UsersDtoConverter {
  public convertFrom(userRequestDto: UserRequestDto): User {
    const { name, email } = userRequestDto;
    return new User({ name, email });
  }

  public convertTo(user: User): UserResponseDto {
    const { id, name, email } = user;
    return new UserResponseDto({ id, name, email });
  }
}
