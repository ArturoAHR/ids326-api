import { Injectable } from '@nestjs/common';
import { Company } from '../../entities/company.entity';
import { CompanyRepository } from './company.repository';

@Injectable()
export class CompanyService {
  constructor(private readonly companyRepository: CompanyRepository) {}

  getAll = async (): Promise<Company[]> => {
    const companies = await this.companyRepository.getAll();
    return companies;
  };
}
