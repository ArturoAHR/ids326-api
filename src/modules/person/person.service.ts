import { Injectable } from '@nestjs/common';
import { Person } from '../../entities/person.entity';
import { PersonRepository } from './person.repository';

@Injectable()
export class PersonService {
  constructor(private readonly personRepository: PersonRepository) {}

  getAll = async (): Promise<Person[]> => {
    return this.personRepository.getAll();
  };
}
