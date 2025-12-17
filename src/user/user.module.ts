import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), RedisModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule { }
