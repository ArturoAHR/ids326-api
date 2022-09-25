import { Column } from 'typeorm';
import { BaseEntity } from './base.entity';

export class ContactType extends BaseEntity {
  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'description', type: 'varchar' })
  description: string;
}
