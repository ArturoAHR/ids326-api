import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('role')
export class Role extends BaseEntity {
  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'description', type: 'varchar' })
  description: string;
}
