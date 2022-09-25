import { Controller, Get } from '@nestjs/common';
import { Department } from '../../entities/department.entity';
import { DepartmentService } from './department.service';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Get()
  async getAll(): Promise<Department[]> {
    return await this.departmentService.getAll();
  }
}
