import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserRequestDto } from '../dto/requests/create-user.request.dto';
import { UpdateUserRequestDto } from '../dto/requests/update-user.request.dto';
import { REDIS_CLIENT } from 'src/redis/redis.module';
import Redis from 'ioredis';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @Inject(REDIS_CLIENT) private redis: Redis
  ) { }
  create(createUserRequestDto: CreateUserRequestDto) {
    return 'Hàm create 1 user';
  }

  findAll() {
    return `Hàm findAll user`;
  }

  findOne(id: number) {
    return `Hàm findOne user ${id}`;
  }

  update(id: number, updateUserRequestDto: UpdateUserRequestDto) {
    return `Hàm update user ${id}`;
  }

  remove(id: number) {
    return `Hàm remove user ${id}`;
  }
}
