import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { EXAMPLE_PEOPLE } from '../factories/person.factory';

export default class CreatePeople implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into('person')
      .values(EXAMPLE_PEOPLE)
      .execute();
  }
}
