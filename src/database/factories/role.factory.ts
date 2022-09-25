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
    id: 'adc864dc-0baa-4535-851b-261e389ec19b',
    name: 'Admin',
    description: 'Administrates the system',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: '9894e17b-e597-4371-8506-d92478e15b16',
    name: 'Manager',
    description: 'Manages employees',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: '06349202-fb4b-46df-a4d4-935a25ee7e99',
    name: 'CEO',
    description: 'Company CEO',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
];
