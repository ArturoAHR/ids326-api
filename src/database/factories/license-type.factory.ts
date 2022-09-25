import { LicenseType } from '../../entities/license-type.entity';

export const EXAMPLE_LICENSE_TYPES: LicenseType[] = [
  {
    id: '19487abe-38ce-4989-bab5-803e19c09255',
    name: 'Free',
    description: 'No paid plan',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: 'bb7ce947-2eb7-4375-8a50-bc273fbb716f',
    name: 'Standard',
    description: 'Some features',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: '903a5946-855a-4792-a75e-b7375e0e0d67',
    name: 'Premium',
    description: 'All features',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
];
