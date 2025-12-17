import { MigrationInterface, QueryRunner } from "typeorm";

export class AutoMigration1765943514756 implements MigrationInterface {
    name = 'AutoMigration1765943514756'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "age" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "age"`);
    }

}
