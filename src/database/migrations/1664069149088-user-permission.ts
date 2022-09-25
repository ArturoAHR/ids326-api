import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { idColumn, metaDataColumns } from './1664063190515-base-entity-columns';

export class userPermission1664069149088 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_permission',
        columns: [
          idColumn,
          {
            name: 'user_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'permission_id',
            type: 'uuid',
            isNullable: false,
          },
          ...metaDataColumns,
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('user_permission', true);
  }
}
