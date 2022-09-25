import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUUID,
} from 'class-validator';
import { BaseDTO } from '../base.dto';

export class CreatePersonRequestDTO extends BaseDTO {
  @IsString()
  firstName: string;

  @IsOptional()
  @IsString()
  middleName: string;

  @IsString()
  lastName: string;

  @IsBoolean()
  staff: boolean;

  @IsPhoneNumber()
  phone: string;

  @IsEmail()
  email: string;

  @IsUUID()
  roleId: string;

  @IsUUID()
  contactTypeId: string;

  @IsUUID()
  departmentId: string;

  @IsUUID()
  companyId: string;
}
