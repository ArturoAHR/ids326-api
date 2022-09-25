import { Injectable } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { CreateRoleRequestDTO } from '../../dto/role/create-role-request.dto';
import { UpdateRoleRequestDTO } from '../../dto/role/update-role-request.dto';
import { Role } from '../../entities/role.entity';
import { RoleRepository } from './role.repository';

@Injectable()
export class RoleService {
  constructor(private readonly roleRepository: RoleRepository) {}

  getAll = async (): Promise<Role[]> => {
    const roles = await this.roleRepository.getAll();
    return roles;
  };

  create = async (dto: CreateRoleRequestDTO): Promise<Role> => {
    const newRole: Partial<Role> = {
      name: dto.name,
      description: dto.description,
    };
    const savedRole = await this.roleRepository.save(newRole);
    return savedRole;
  };

  getById = async (id: string): Promise<Role> => {
    const role = await this.roleRepository.getById(id);
    return role;
  };

  update = async (id: string, dto: UpdateRoleRequestDTO): Promise<Role> => {
    const newRole: Partial<Role> = {
      id,
      name: dto.name,
      description: dto.description,
    };
    const savedRole = await this.roleRepository.save(newRole);
    return savedRole;
  };

  delete = async (id: string): Promise<boolean> => {
    const deleteResult: DeleteResult = await this.roleRepository.delete(id);
    return deleteResult?.affected && deleteResult.affected > 0;
  };
}
