import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('license_type')
export class LicenseType extends BaseEntity {
  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'description', type: 'varchar' })
  description: string;
}
