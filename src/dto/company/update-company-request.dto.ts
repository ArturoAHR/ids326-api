import { PartialType } from '@nestjs/swagger';
import { CreateCompanyRequestDTO } from './create-company-request.dto';

export class UpdateCompanyRequestDTO extends PartialType(
  CreateCompanyRequestDTO,
) {}
