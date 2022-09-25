import { Injectable } from '@nestjs/common';
import { CreatePersonRequestDTO } from '../../dto/create-person-request.dto';
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

  create = async (dto: CreatePersonRequestDTO): Promise<Person> => {
    const newPerson: Partial<Person> = {
      firstName: dto.firstName,
      middleName: dto.middleName,
      lastName: dto.lastName,
      email: dto.email,
      phone: dto.phone,
      staff: dto.staff,
      contactTypeId: dto.contactTypeId,
      companyId: dto.companyId,
      roleId: dto.roleId,
      departmentId: dto.departmentId,
    };
    const savedPerson = this.personRepository.save(newPerson);
    return savedPerson;
  };

  getById = async (id: string): Promise<Person> => {
    const person = await this.personRepository.getById(id);
    await person.role;
    await person.company;
    await person.department;
    await person.contactType;
    return person;
  };
}
