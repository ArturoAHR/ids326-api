import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class foreignKeys1664069465213 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'person',
      new TableForeignKey({
        columnNames: ['role_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'role',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
        name: 'FK_person_role',
      }),
    );

    await queryRunner.createForeignKey(
      'person',
      new TableForeignKey({
        columnNames: ['contact_type_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'contact_type',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
        name: 'FK_person_contact_type',
      }),
    );

    await queryRunner.createForeignKey(
      'person',
      new TableForeignKey({
        columnNames: ['company_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'company',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
        name: 'FK_person_company',
      }),
    );

    await queryRunner.createForeignKey(
      'person',
      new TableForeignKey({
        columnNames: ['department_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'department',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
        name: 'FK_person_department',
      }),
    );

    await queryRunner.createForeignKey(
      'company',
      new TableForeignKey({
        columnNames: ['ceo_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'person',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
        name: 'FK_company_person',
      }),
    );

    await queryRunner.createForeignKey(
      'user',
      new TableForeignKey({
        columnNames: ['license_type_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'license_type',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
        name: 'FK_user_license_type',
      }),
    );

    await queryRunner.createForeignKey(
      'user_permission',
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
        name: 'FK_user_permission_user',
      }),
    );

    await queryRunner.createForeignKey(
      'user_permission',
      new TableForeignKey({
        columnNames: ['permission_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'permission',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
        name: 'FK_user_permission_permission',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'person',
      new TableForeignKey({
        columnNames: ['role_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'role',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
        name: 'FK_person_role',
      }),
    );

    await queryRunner.dropForeignKey(
      'person',
      new TableForeignKey({
        columnNames: ['contact_type_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'contact_type',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
        name: 'FK_person_contact_type',
      }),
    );

    await queryRunner.dropForeignKey(
      'person',
      new TableForeignKey({
        columnNames: ['company_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'company',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
        name: 'FK_person_company',
      }),
    );

    await queryRunner.dropForeignKey(
      'person',
      new TableForeignKey({
        columnNames: ['department_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'department',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
        name: 'FK_person_department',
      }),
    );

    await queryRunner.dropForeignKey(
      'company',
      new TableForeignKey({
        columnNames: ['ceo_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'person',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
        name: 'FK_company_person',
      }),
    );

    await queryRunner.dropForeignKey(
      'user',
      new TableForeignKey({
        columnNames: ['license_type_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'license_type',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
        name: 'FK_user_license_type',
      }),
    );

    await queryRunner.dropForeignKey(
      'user_permission',
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
        name: 'FK_user_permission_user',
      }),
    );

    await queryRunner.dropForeignKey(
      'user_permission',
      new TableForeignKey({
        columnNames: ['permission_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'permission',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION',
        name: 'FK_user_permission_permission',
      }),
    );
  }
}
