import { ContactType } from '../../entities/contact-type.entity';

export const CONTACT_TYPES: ContactType[] = [
  {
    id: '632d4a8a-bbc6-449b-8e80-1e7a29ab7cb5',
    name: 'Phone',
    description: 'Contact by phone',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: '6576e81d-2ef1-4f74-9c41-ca9b07e4291e',
    name: 'Email',
    description: 'Contact by email',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: '91071fa2-1b6f-450e-9c3d-98eda34f0145',
    name: 'Fax',
    description: 'Contact by fax',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
];
