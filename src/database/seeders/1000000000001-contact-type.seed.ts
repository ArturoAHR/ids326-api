import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { CONTACT_TYPES } from '../factories/contact-type.factory';

export default class CreateContactTypes implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into('contact_type')
      .values(CONTACT_TYPES)
      .execute();
  }
}
