import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { Repository } from 'typeorm';
import { UserEntity } from '../../db';
import { User } from '../models/user.model';
import { UsersEntityConverter } from './users-entity.converter';
import { ResourcesEntityConverter } from '../../core/resources/convertes/resources-entity.converter';

describe('UsersService', () => {
  let usersService: UsersService;
  let userRepository: Repository<UserEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        UsersEntityConverter,
        ResourcesEntityConverter,
        {
          provide: 'UserEntityRepository',
          useClass: Repository,
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    userRepository = module.get<Repository<UserEntity>>('UserEntityRepository');
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const userEntity: UserEntity = {
        id: 'generated_id',
        name: 'John Doe',
        email: 'email@email.com',
      };
      const user: User = {
        id: 'generated_id',
        name: 'John Doe',
        email: 'email@email.com',
      };
      jest
        .spyOn(userRepository, 'save')
        .mockImplementation(() => Promise.resolve(userEntity));

      expect(await usersService.createUser(user)).toEqual(user);
    });
  });

  describe('findUsersById', () => {
    it('should return the user with the given ID', async () => {
      const userEntity: UserEntity = {
        id: 'generated_id',
        name: 'John Doe',
        email: 'email@email.com',
      };
      const user: User = {
        id: 'generated_id',
        name: 'John Doe',
        email: 'email@email.com',
      };
      jest
        .spyOn(userRepository, 'findOneBy')
        .mockImplementation(() => Promise.resolve(userEntity));

      expect(await usersService.findUsersById('generated_id')).toEqual(user);
    });
  });
});
