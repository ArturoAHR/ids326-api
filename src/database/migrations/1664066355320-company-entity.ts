import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { idColumn, metaDataColumns } from './1664063190515-base-entity-columns';

export class companyEntity1664066355320 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'company',
        columns: [
          idColumn,
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'ceo_id',
            type: 'uuid',
            isNullable: true,
          },
          {
            name: 'primary_phone',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'secondary_phone',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'fax',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'website',
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
    queryRunner.dropTable('company', true);
  }
}
