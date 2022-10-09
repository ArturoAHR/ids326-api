import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateCompanyRequestDTO } from '../../dto/company/create-company-request.dto';
import { UpdateCompanyRequestDTO } from '../../dto/company/update-company-request.dto';
import { Company } from '../../entities/company.entity';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  async getAll(): Promise<Company[]> {
    return await this.companyService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Company> {
    return await this.companyService.getById(id);
  }

  @Post()
  async create(@Body() dto: CreateCompanyRequestDTO): Promise<Company> {
    return await this.companyService.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateCompanyRequestDTO,
  ): Promise<Company> {
    return await this.companyService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return await this.companyService.delete(id);
  }
}
