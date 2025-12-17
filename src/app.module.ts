import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RedisModule } from './redis/redis.module';
import { UserModule } from './user/user.module';
const isProd = process.env.NODE_ENV === 'production';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'postgres',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME || 'db_user',
      password: process.env.DB_PASSWORD || '123456',
      database: process.env.DB_DATABASE || 'db_test_simple_project',
      synchronize: false,
      entities: [isProd ? 'dist/**/*.entity.js' : 'src/**/*.entity.ts'],
      migrations: [isProd ? 'dist/migrations/*.js' : 'src/migrations/*.ts'],
      logging: true,
    }),
    RedisModule,
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
