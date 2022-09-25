import { EntityRepository, Repository } from 'typeorm';
import { Person } from '../../entities/person.entity';

@EntityRepository(Person)
export class PersonRepository extends Repository<Person> {
  async getAll(): Promise<Person[]> {
    return await this.createQueryBuilder('person').getMany();
  }
}
