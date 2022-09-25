import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreatePersonRequestDTO } from '../../dto/person/create-person-request.dto';
import { Person } from '../../entities/person.entity';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  async getAll(): Promise<Person[]> {
    return await this.personService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Person> {
    return await this.personService.getById(id);
  }

  @Post()
  async create(@Body() dto: CreatePersonRequestDTO): Promise<Person> {
    return await this.personService.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: CreatePersonRequestDTO,
  ): Promise<Person> {
    return await this.personService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return await this.personService.delete(id);
  }
}
