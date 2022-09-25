import { EntityRepository, Repository } from 'typeorm';
import { Role } from '../../entities/role.entity';

@EntityRepository()
export class RoleRepository extends Repository<Role> {}
