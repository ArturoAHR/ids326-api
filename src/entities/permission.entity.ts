import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('permission')
export class LicenseType extends BaseEntity {
  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'description', type: 'varchar' })
  description: string;

  // @ManyToMany(() => User, (user) => user.permissions)
  //   questions: Promise<Question[]>
}
