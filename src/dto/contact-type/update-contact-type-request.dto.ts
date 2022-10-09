import { PartialType } from '@nestjs/swagger';
import { CreateContactTypeRequestDTO } from './create-contact-type-request.dto';

export class UpdateContactTypeRequestDTO extends PartialType(
  CreateContactTypeRequestDTO,
) {}
