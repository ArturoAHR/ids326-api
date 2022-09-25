import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Company } from '../../entities/company.entity';
import { CompanyController } from './company.controller';
import { CompanyRepository } from './company.repository';
import { CompanyService } from './company.service';

@Module({
  imports: [TypeOrmModule.forFeature([Company, CompanyRepository])],
  controllers: [CompanyController],
  providers: [CompanyService],
})
export class CompanyModule {}
