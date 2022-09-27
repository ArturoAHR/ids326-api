import { EntityRepository, Repository } from 'typeorm';
import { Company } from '../../entities/company.entity';

@EntityRepository(Company)
export class CompanyRepository extends Repository<Company> {
  async getAll(): Promise<Company[]> {
    return await this.createQueryBuilder('company').getMany();
  }
}
