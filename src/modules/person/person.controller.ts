import { Controller, Get } from '@nestjs/common';
import { Person } from '../../entities/person.entity';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Get()
  async getAll(): Promise<Person[]> {
    return await this.personService.getAll();
  }
}
