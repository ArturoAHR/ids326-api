import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePersonRequestDTO } from '../../dto/create-person-request.dto';
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
}
