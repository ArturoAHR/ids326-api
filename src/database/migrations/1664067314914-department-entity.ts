import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { idColumn, metaDataColumns } from './1664063190515-base-entity-columns';

export class departmentEntity1664067314914 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'department',
        columns: [
          idColumn,
          {
            name: 'code',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: false,
          },
          ...metaDataColumns,
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('department', true);
  }
}
