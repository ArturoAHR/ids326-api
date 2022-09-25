import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { DEPARTMENTS } from '../factories/department.factory';

export default class CreateRoles implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into('department')
      .values(DEPARTMENTS)
      .execute();
  }
}
