import { EntityRepository, Repository } from 'typeorm';
import { Department } from '../../entities/department.entity';

@EntityRepository()
export class ContactTypeRepository extends Repository<Department> {}
