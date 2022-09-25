import { EntityRepository, Repository } from 'typeorm';
import { Department } from '../../entities/department.entity';

@EntityRepository()
export class DepartmentRepository extends Repository<Department> {
  async getAll(): Promise<Department[]> {
    return await this.createQueryBuilder('department').getMany();
  }
}
