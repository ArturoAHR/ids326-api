import { IsString } from 'class-validator';
import { BaseDTO } from '../base.dto';

export class CreateRoleRequestDTO extends BaseDTO {
  @IsString()
  name: string;

  @IsString()
  description: string;
}
