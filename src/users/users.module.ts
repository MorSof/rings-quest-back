import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../db';
import { UsersDtoConverter } from './services/users-dto.converter';
import { UsersEntityConverter } from './services/users-entity.converter';
import { ResourceModule } from '../core/resources/resource.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersDtoConverter, UsersEntityConverter],
  imports: [TypeOrmModule.forFeature([UserEntity]), ResourceModule],
})
export class UsersModule {}
