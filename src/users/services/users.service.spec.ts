import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { Repository } from 'typeorm';
import { User } from '../../db';
import { CreateUserDto } from '../dto/users.dtos';

describe('UsersService', () => {
  let usersService: UsersService;
  let userRepository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: 'UserRepository',
          useClass: Repository,
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    userRepository = module.get<Repository<User>>('UserRepository');
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      const createUserDto: CreateUserDto = {
        username: 'John Doe',
        password: 'password1234',
        email: 'email@email.com',
      };
      const user: User = {
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
      const user: User = {
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
