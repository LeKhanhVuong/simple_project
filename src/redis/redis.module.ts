import { Module } from '@nestjs/common';
import Redis from 'ioredis';
import { ConfigModule, ConfigService } from '@nestjs/config';

export const REDIS_CLIENT = 'REDIS_CLIENT';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: REDIS_CLIENT,
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return new Redis({
          host: config.get<string>('REDIS_HOST'),
          port: Number(config.get('REDIS_PORT')),
        });
      },
    },
  ],
  exports: [REDIS_CLIENT],
})
export class RedisModule {}
