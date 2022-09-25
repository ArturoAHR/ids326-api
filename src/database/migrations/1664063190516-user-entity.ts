import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { idColumn, metaDataColumns } from './1664063190515-base-entity-columns';

export class userEntity1664063190516 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');

    await queryRunner.createTable(
      new Table({
        name: 'person',
        columns: [
          idColumn,
          {
            name: 'first_name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'middle_name',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'last_name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'phone',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'role_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'contact_type_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'company_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'department_id',
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
    queryRunner.dropTable('person', true);
  }
}
