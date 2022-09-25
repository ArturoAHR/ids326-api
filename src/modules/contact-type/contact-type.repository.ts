import { EntityRepository, Repository } from 'typeorm';
import { ContactType } from '../../entities/contact-type.entity';

@EntityRepository()
export class ContactTypeRepository extends Repository<ContactType> {
  async getAll(): Promise<ContactType[]> {
    return await this.createQueryBuilder('contactType').getMany();
  }

  async getById(id: string): Promise<ContactType> {
    return await this.findOneOrFail({ id: id });
  }
}
