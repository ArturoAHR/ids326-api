import { IsString } from 'class-validator';
import { BaseDTO } from '../base.dto';

export class CreateDepartmentRequestDTO extends BaseDTO {
  @IsString()
  name: string;

  @IsString()
  code: string;

  @IsString()
  description: string;
}
