import { MigrationInterface, QueryRunner } from "typeorm";

export class AutoMigration1765943580400 implements MigrationInterface {
    name = 'AutoMigration1765943580400'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" character varying(15)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
    }

}
