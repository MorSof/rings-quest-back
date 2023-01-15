import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from '../services/users.service';
import { User } from '../models/user.model';
import { UserResponseDto } from '../dtos/user-response.dto';

describe('UsersController', () => {
  let controller: UsersController;
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            findUsersById: jest.fn(),
            createUser: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    service = module.get<UsersService>(UsersService);
  });

  describe('findUsersById', () => {
    it('should return an user', async () => {
      const user = new User({ id: '1', name: 'name', email: 'email' });
      jest.spyOn(service, 'findUsersById').mockResolvedValue(user);

      expect(await controller.findUsersById('1')).toEqual(
        new UserResponseDto({ id: '1', name: 'name', email: 'email' }),
      );
    });
  });

  describe('createUsers', () => {
    it('should create an user', async () => {
      const user = new User({ id: '1', name: 'name', email: 'email' });
      jest.spyOn(service, 'createUser').mockResolvedValue(user);

      const userResponseDto: UserResponseDto = await controller.createUsers({
        name: 'name',
        email: 'email',
      });

      expect(userResponseDto).toEqual({
        id: '1',
        name: 'name',
        email: 'email',
      });
    });
  });
});
