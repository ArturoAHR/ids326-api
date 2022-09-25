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
  constructor(private readonly contactTypeService: ContactTypeService) {}

  @Get()
  async getAll(): Promise<ContactType[]> {
    return await this.contactTypeService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<ContactType> {
    return await this.contactTypeService.getById(id);
  }

  @Post()
  async create(@Body() dto: CreateContactTypeRequestDTO): Promise<ContactType> {
    return await this.contactTypeService.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateContactTypeRequestDTO,
  ): Promise<ContactType> {
    return await this.contactTypeService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return await this.contactTypeService.delete(id);
  }
}
