import { EntityRepository, Repository } from 'typeorm';
import { ContactType } from '../../entities/contact-type.entity';

@EntityRepository()
export class ContactTypeRepository extends Repository<ContactType> {}
