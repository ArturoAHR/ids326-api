export const baseEntityColumns = [
  {
    name: 'id',
    type: 'uuid',
    default: 'uuid_generate_v4()',
    isNullable: false,
    isPrimary: true,
  },
  {
    name: 'created_at',
    type: 'TIMESTAMP',
    isNullable: false,
    default: 'now()',
  },
  {
    name: 'updated_at',
    type: 'TIMESTAMP',
    isNullable: true,
    default: 'now()',
  },
  {
    name: 'deleted_at',
    type: 'TIMESTAMP',
    isNullable: true,
    default: 'now()',
  },
];
