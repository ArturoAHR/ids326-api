import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateDepartmentRequestDTO } from '../../dto/department/create-department-request.dto';
import { UpdateDepartmentRequestDTO } from '../../dto/department/update-department-request.dto';
import { Department } from '../../entities/department.entity';
import { DepartmentService } from './department.service';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Get()
  async getAll(): Promise<Department[]> {
    return await this.departmentService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Department> {
    return await this.departmentService.getById(id);
  }

  @Post()
  async create(@Body() dto: CreateDepartmentRequestDTO): Promise<Department> {
    return await this.departmentService.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateDepartmentRequestDTO,
  ): Promise<Department> {
    return await this.departmentService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return await this.departmentService.delete(id);
  }
}
