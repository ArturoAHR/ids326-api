import { Role } from '../../entities/role.entity';

export const ROLES: Role[] = [
  {
    id: 'ad5aa509-6151-4186-8021-8d411774f69f',
    name: 'Client',
    description: 'Provide services to them',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: 'a9ea8997-9884-4afd-8c57-5534dd5a4e2c',
    name: 'Employee',
    description: 'Works in the company',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: 'af295de5-6969-4afb-bb86-1366c351375a',
    name: 'Stakeholder',
    description: 'Has shares in the company',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: 'af295de5-6969-4afb-bb86-1366c351375a',
    name: 'Admin',
    description: 'Administrates the system',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: 'af295de5-6969-4afb-bb86-1366c351375a',
    name: 'Manager',
    description: 'Manages employees',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
];
