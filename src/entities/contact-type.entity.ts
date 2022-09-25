import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('contact_type')
export class ContactType extends BaseEntity {
  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'description', type: 'varchar' })
  description: string;
}
