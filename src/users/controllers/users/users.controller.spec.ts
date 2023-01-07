import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from '../../services/users/users.service';
import { User } from '../../../db';

describe('UsersController', () => {
  let usersController: UsersController;
  const usersService = { findUsersById: jest.fn() };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    })
      .overrideProvider(UsersService)
      .useValue(usersService)
      .compile();

    usersController = module.get<UsersController>(UsersController);
  });

  describe('findUsersById', () => {
    it('should return the user with the given ID', () => {
      const user: User = {
        id: 1,
        username: 'John Doe',
        password: 'password1234',
        email: 'email@email.com',
      };
      usersService.findUsersById.mockReturnValue(user);
      expect(usersController.findUsersById(1)).toBe(user);
    });
  });
});
