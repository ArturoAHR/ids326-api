import { EntityRepository, Repository } from 'typeorm';
import { Role } from '../../entities/role.entity';

@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {
  async getAll(): Promise<Role[]> {
    return await this.createQueryBuilder('role').getMany();
  }

  async getById(id: string): Promise<Role> {
    return await this.findOneOrFail({ id: id });
  }
}
