import { PartialType } from '@nestjs/swagger';
import { CreatePersonRequestDTO } from './create-person-request.dto';

export class UpdatePersonRequestDTO extends PartialType(
  CreatePersonRequestDTO,
) {}
