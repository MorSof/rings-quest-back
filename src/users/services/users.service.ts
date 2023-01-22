import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../db';
import { User } from '../models/user.model';
import { Resource } from '../../core/resources/models/resource.model';
import { UsersEntityConverter } from './users-entity.converter';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly usersEntityConverter: UsersEntityConverter,
  ) {}

  async createUser(user: User): Promise<User> {
    let userEntity: UserEntity = this.usersEntityConverter.convertTo(user);
    userEntity = await this.userRepository.save(userEntity);
    return this.usersEntityConverter.convertFrom(userEntity);
  }

  async findUAllUsers(): Promise<User[]> {
    const userEntities: UserEntity[] = await this.userRepository.find();
    return userEntities.map((userEntity) =>
      this.usersEntityConverter.convertFrom(userEntity),
    );
  }

  async findUsersById(id: string): Promise<User> {
    const userEntity = await this.userRepository.findOneBy({ id });
    return this.usersEntityConverter.convertFrom(userEntity);
  }

  async getUserStorage(id: string): Promise<User> {
    const userEntity = await this.userRepository.findOne({
      select: ['resources'],
      where: { id },
      relations: { resources: true },
    });
    return this.usersEntityConverter.convertFrom(userEntity);
  }
}
