import { Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { CreateDepartmentRequestDTO } from '../../dto/department/create-department-request.dto';
import { UpdateDepartmentRequestDTO } from '../../dto/department/update-department-request.dto';
import { Department } from '../../entities/department.entity';
import { DepartmentRepository } from './department.repository';

@Injectable()
export class DepartmentService {
  constructor(private readonly departmentRepository: DepartmentRepository) {}

  getAll = async (): Promise<Department[]> => {
    const companies = await this.departmentRepository.getAll();
    return companies;
  };

  create = async (dto: CreateDepartmentRequestDTO): Promise<Department> => {
    const newDepartment: Partial<Department> = {
      name: dto.name,
      code: dto.code,
      description: dto.description,
    };
    const savedDepartment = await this.departmentRepository.save(newDepartment);
    return savedDepartment;
  };

  getById = async (id: string): Promise<Department> => {
    const department = await this.departmentRepository.getById(id);
    return department;
  };

  update = async (
    id: string,
    dto: UpdateDepartmentRequestDTO,
  ): Promise<Department> => {
    const newDepartment: Partial<Department> = {
      id,
      code: dto.code,
      name: dto.name,
      description: dto.description,
    };
    const savedDepartment = await this.departmentRepository.save(newDepartment);
    return savedDepartment;
  };

  delete = async (id: string): Promise<boolean> => {
    const deleteResult: DeleteResult = await this.departmentRepository.delete(
      id,
    );
    return deleteResult?.affected && deleteResult.affected > 0;
  };
}
