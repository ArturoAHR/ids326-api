import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { LICENSE_TYPES } from '../factories/license-type.factory';

export default class CreateLicenseTypes implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into('license_type')
      .values(LICENSE_TYPES)
      .execute();
  }
}
