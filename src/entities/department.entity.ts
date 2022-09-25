import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('department')
export class Department extends BaseEntity {
  @Column({ name: 'code', type: 'varchar' })
  code: string;

  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'description', type: 'varchar' })
  description: string;
}
