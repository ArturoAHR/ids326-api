import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateContactTypeRequestDTO } from '../../dto/contact-type/create-contact-type-response.dto';
import { UpdateContactTypeRequestDTO } from '../../dto/contact-type/update-contact-type-response.dto';
import { ContactType } from '../../entities/contact-type.entity';
import { ContactTypeService } from './contact-type.service';

@Controller('contact-type')
export class ContactTypeController {
  constructor(private readonly roleService: ContactTypeService) {}

  @Get()
  async getAll(): Promise<ContactType[]> {
    return await this.roleService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<ContactType> {
    return await this.roleService.getById(id);
  }

  @Post()
  async create(@Body() dto: CreateContactTypeRequestDTO): Promise<ContactType> {
    return await this.roleService.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateContactTypeRequestDTO,
  ): Promise<ContactType> {
    return await this.roleService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return await this.roleService.delete(id);
  }
}
