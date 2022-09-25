import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addStaffColumnToPersonTable1664072113699
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'person',
      new TableColumn({
        name: 'staff',
        type: 'boolean',
        isNullable: false,
        default: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('person', 'staff');
  }
}
