import { Company } from '../../entities/company.entity';

export const EXAMPLE_COMPANIES: Company[] = [
  {
    id: 'bf340a61-10de-460b-95a2-2ef5da16fb19',
    ceoId: null,
    ceo: null,
    name: 'Intec',
    email: 'info@intec.edu.do',
    fax: '829-500-3020',
    primaryPhone: '809-302-5893',
    secondaryPhone: '809-320-5209',
    website: 'intec.edu.do',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
  {
    id: 'f9c0d889-0893-498e-997d-5e1e5d8036fd',
    ceoId: null,
    ceo: null,
    name: 'Google',
    email: 'google@gmail.com',
    fax: '809-439-2939',
    primaryPhone: '809-320-5938',
    secondaryPhone: null,
    website: 'google.com',
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  },
];
