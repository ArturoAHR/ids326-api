import { Controller, Get } from '@nestjs/common';
import { Company } from '../../entities/company.entity';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  async getAll(): Promise<Company[]> {
    return await this.companyService.getAll();
  }
}
