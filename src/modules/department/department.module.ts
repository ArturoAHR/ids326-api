import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { DepartmentRepository } from './department.repository';
import { Department } from '../../entities/department.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Department, DepartmentRepository])],
  providers: [DepartmentService],
  controllers: [DepartmentController],
})
export class DepartmentModule {}
