import { Injectable } from '@nestjs/common';
import { Department } from '../../entities/department.entity';
import { DepartmentRepository } from './department.repository';

@Injectable()
export class DepartmentService {
  constructor(private readonly departmentRepository: DepartmentRepository) {}

  getAll = async (): Promise<Department[]> => {
    const companies = await this.departmentRepository.getAll();
    return companies;
  };
}
