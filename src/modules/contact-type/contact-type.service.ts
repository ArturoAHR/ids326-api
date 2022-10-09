import { Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { CreateContactTypeRequestDTO } from '../../dto/contact-type/create-contact-type-response.dto';
import { UpdateContactTypeRequestDTO } from '../../dto/contact-type/update-contact-type-response.dto';
import { ContactType } from '../../entities/contact-type.entity';
import { ContactTypeRepository } from './contact-type.repository';

@Injectable()
export class ContactTypeService {
  constructor(private readonly contactTypeRepository: ContactTypeRepository) {}

  getAll = async (): Promise<ContactType[]> => {
    const contactTypes = await this.contactTypeRepository.getAll();
    return contactTypes;
  };

  create = async (dto: CreateContactTypeRequestDTO): Promise<ContactType> => {
    const newContactType: Partial<ContactType> = {
      name: dto.name,
      description: dto.description,
    };
    const savedContactType = await this.contactTypeRepository.save(
      newContactType,
    );
    return savedContactType;
  };

  getById = async (id: string): Promise<ContactType> => {
    const contactType = await this.contactTypeRepository.getById(id);
    return contactType;
  };

  update = async (
    id: string,
    dto: UpdateContactTypeRequestDTO,
  ): Promise<ContactType> => {
    const newContactType: Partial<ContactType> = {
      id,
      name: dto.name,
      description: dto.description,
    };
    const savedContactType = await this.contactTypeRepository.save(
      newContactType,
    );
    return savedContactType;
  };

  delete = async (id: string): Promise<boolean> => {
    const deleteResult: DeleteResult = await this.contactTypeRepository.delete(
      id,
    );
    return deleteResult?.affected && deleteResult.affected > 0;
  };
}
