import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { EXAMPLE_COMPANIES } from '../factories/company.factory';

export default class CreateRoles implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into('company')
      .values(EXAMPLE_COMPANIES)
      .execute();
  }
}
