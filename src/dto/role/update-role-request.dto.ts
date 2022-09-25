import { PartialType } from '@nestjs/swagger';
import { CreateRoleRequestDTO } from './create-role-request.dto';

export class UpdateRoleRequestDTO extends PartialType(CreateRoleRequestDTO) {}
