import { Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { CreateCompanyRequestDTO } from '../../dto/company/create-company-request.dto';
import { UpdateCompanyRequestDTO } from '../../dto/company/update-company-request.dto';
import { Company } from '../../entities/company.entity';
import { CompanyRepository } from './company.repository';

@Injectable()
export class CompanyService {
  constructor(private readonly companyRepository: CompanyRepository) {}

  getAll = async (): Promise<Company[]> => {
    const companies = await this.companyRepository.getAll();
    for (const company of companies) {
      await company.ceo;
    }
    return companies;
  };

  create = async (dto: CreateCompanyRequestDTO): Promise<Company> => {
    const newCompany: Partial<Company> = {
      name: dto.name,
      ceoId: dto.ceoId,
      primaryPhone: dto.primaryPhone,
      secondaryPhone: dto.secondaryPhone,
      fax: dto.fax,
      email: dto.email,
      website: dto.website,
    };
    const savedCompany = await this.companyRepository.save(newCompany);
    return savedCompany;
  };

  getById = async (id: string): Promise<Company> => {
    const company = await this.companyRepository.getById(id);
    await company.ceo;
    return company;
  };

  update = async (
    id: string,
    dto: UpdateCompanyRequestDTO,
  ): Promise<Company> => {
    const newCompany: Partial<Company> = {
      id,
      name: dto.name,
      ceoId: dto.ceoId,
      primaryPhone: dto.primaryPhone,
      secondaryPhone: dto.secondaryPhone,
      fax: dto.fax,
      email: dto.email,
      website: dto.website,
    };
    const savedCompany = await this.companyRepository.save(newCompany);
    return savedCompany;
  };

  delete = async (id: string): Promise<boolean> => {
    const deleteResult: DeleteResult = await this.companyRepository.delete(id);
    return deleteResult?.affected && deleteResult.affected > 0;
  };
}
