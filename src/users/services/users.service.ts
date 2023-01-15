import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../db';
import { User } from '../models/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(user: User): Promise<User> {
    let userEntity: UserEntity = this.convertUserModelToUserEntity(user);
    userEntity = await this.userRepository.save(userEntity);
    return this.convertUserEntityToUserModel(userEntity);
  }

  async findUsersById(id: string): Promise<User> {
    const userEntity = await this.userRepository.findOneBy({ id });
    return this.convertUserEntityToUserModel(userEntity);
  }

  public convertUserEntityToUserModel(userEntity: UserEntity): User {
    const { id, name, email } = userEntity;
    return new User({ id, name, email });
  }

  public convertUserModelToUserEntity(user: User): UserEntity {
    const { id, name, email } = user;
    return new UserEntity({ id, name, email });
  }
}
