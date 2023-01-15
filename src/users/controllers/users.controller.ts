import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserRequestDto } from '../dtos/user-request.dto';
import { UsersService } from '../services/users.service';
import { ApiTags } from '@nestjs/swagger';
import { User } from '../models/user.model';
import { UserResponseDto } from '../dtos/user-response.dto';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get(':id')
  async findUsersById(@Param('id') id: string) {
    const user: User = await this.userService.findUsersById(id);
    return this.convertModelToDto(user);
  }

  @Post()
  @UsePipes(ValidationPipe)
  async createUsers(@Body() createUserDto: UserRequestDto) {
    const user: User = this.convertDtoToModel(createUserDto);
    return this.convertModelToDto(await this.userService.createUser(user));
  }

  private convertDtoToModel(userRequestDto: UserRequestDto): User {
    const { name, email } = userRequestDto;
    return new User({ name, email });
  }

  private convertModelToDto(user: User): UserResponseDto {
    const { id, name, email } = user;
    return new UserResponseDto({ id, name, email });
  }
}
