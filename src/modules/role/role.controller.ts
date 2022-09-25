import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateRoleRequestDTO } from '../../dto/role/create-role-request.dto';
import { UpdateRoleRequestDTO } from '../../dto/role/update-role-request.dto';
import { Role } from '../../entities/role.entity';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Get()
  async getAll(): Promise<Role[]> {
    return await this.roleService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Role> {
    return await this.roleService.getById(id);
  }

  @Post()
  async create(@Body() dto: CreateRoleRequestDTO): Promise<Role> {
    return await this.roleService.create(dto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: UpdateRoleRequestDTO,
  ): Promise<Role> {
    return await this.roleService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<boolean> {
    return await this.roleService.delete(id);
  }
}
