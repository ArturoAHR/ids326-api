import { PartialType } from '@nestjs/swagger';
import { CreateDepartmentRequestDTO } from './create-department-request.dto';

export class UpdateDepartmentRequestDTO extends PartialType(
  CreateDepartmentRequestDTO,
) {}
