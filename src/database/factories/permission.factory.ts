import { Permission } from '../../entities/permission.entity';

export const PERMISSIONS: Permission[] = [
  {
    id: 'fbdd0d94-a80c-403b-883f-4081475c836f',
    name: 'view_people',
    description: 'View People',
    users: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: 'dacd419d-f69a-400d-af98-e02457f74227',
    name: 'create_people',
    description: 'Create People',
    users: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: '8f53d0ed-5e68-457d-bd87-642d38cf388e',
    name: 'edit_people',
    description: 'Edit People',
    users: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: '21557361-8e92-451e-8c56-854c8559d416',
    name: 'delete_people',
    description: 'Delete People',
    users: null,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
];
