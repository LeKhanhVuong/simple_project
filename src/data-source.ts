import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

// Khi chạy bằng ts-node/typeorm-ts-node-* thì TS_NODE=true
const isTs = !!process.env.TS_NODE;

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'db_user',
  password: process.env.DB_PASSWORD || '123456',
  database: process.env.DB_DATABASE || 'db_test_simple_project',

  synchronize: false,
  logging: true,

  entities: [isTs ? 'src/**/*.entity.ts' : 'dist/**/*.entity.js'],
  migrations: [isTs ? 'src/migrations/*.ts' : 'dist/migrations/*.js'],
});
