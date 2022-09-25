import { PartialType } from '@nestjs/swagger';
import { CreateContactTypeRequestDTO } from './create-contact-type-response.dto';

export class UpdateContactTypeRequestDTO extends PartialType(
  CreateContactTypeRequestDTO,
) {}
