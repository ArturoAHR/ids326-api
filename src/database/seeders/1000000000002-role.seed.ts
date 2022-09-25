import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { ROLES } from '../factories/role.factory';

export default class CreateRoles implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into('role')
      .values(ROLES)
      .execute();
  }
}
