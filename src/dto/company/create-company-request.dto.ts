import {
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsUrl,
  IsUUID,
} from 'class-validator';
import { BaseDTO } from '../base.dto';

export class CreateCompanyRequestDTO extends BaseDTO {
  @IsString()
  name: string;

  @IsOptional()
  @IsUUID()
  ceoId: string;

  @IsPhoneNumber()
  primaryPhone: string;

  @IsOptional()
  @IsPhoneNumber()
  secondaryPhone: string;

  @IsPhoneNumber()
  fax: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsUrl()
  website: string;
}
