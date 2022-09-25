import { Injectable } from '@nestjs/common';
import { Person } from '../../entities/person.entity';
import { PersonRepository } from './person.repository';

@Injectable()
export class PersonService {
  constructor(private readonly personRepository: PersonRepository) {}

  getAll = async (): Promise<Person[]> => {
    const people = await this.personRepository.getAll();
    for (const person of people) {
      await person.role;
      await person.company;
      await person.department;
      await person.contactType;
    }
    return people;
  };
}
