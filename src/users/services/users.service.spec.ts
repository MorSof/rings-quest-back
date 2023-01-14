import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { Repository } from 'typeorm';
import { UserEntity } from '../../db';
import { CreateUserDto } from '../dtos/users.dto';

describe('UsersService', () => {
  let usersService: UsersService;
  let userRepository: Repository<UserEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
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
      const createUserDto: CreateUserDto = {
        username: 'John Doe',
        password: 'password1234',
        email: 'email@email.com',
      };
      const user: UserEntity = {
        id: 1,
        username: 'John Doe',
        password: 'password1234',
        email: 'email@email.com',
      };
      jest.spyOn(userRepository, 'create').mockImplementation(() => user);
      jest
        .spyOn(userRepository, 'save')
        .mockImplementation(() => Promise.resolve(user));

      expect(await usersService.createUser(createUserDto)).toBe(user);
    });
  });

  describe('findUsersById', () => {
    it('should return the user with the given ID', async () => {
      const user: UserEntity = {
        id: 1,
        username: 'John Doe',
        password: 'password1234',
        email: 'email@email.com',
      };
      jest
        .spyOn(userRepository, 'findOneBy')
        .mockImplementation(() => Promise.resolve(user));

      expect(await usersService.findUsersById(1)).toBe(user);
    });
  });
});
