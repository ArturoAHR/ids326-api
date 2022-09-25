import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { PERMISSIONS } from '../factories/permission.factory';

export default class CreateRoles implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into('permission')
      .values(PERMISSIONS)
      .execute();
  }
}
