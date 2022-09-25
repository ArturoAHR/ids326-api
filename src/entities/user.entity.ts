import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { LicenseType } from './license-type.entity';
import { Permission } from './permission.entity';

@Entity('user')
export class User extends BaseEntity {
  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'password_hash', type: 'varchar' })
  passwordHash: string;

  @Column({ name: 'password_salt', type: 'varchar' })
  passwordSalt: string;

  @Column({ name: 'license_type_id', type: 'varchar' })
  licenseTypeId: string;

  @ManyToOne(() => LicenseType, {})
  licenseType?: Promise<LicenseType>;

  @ManyToMany(() => Permission, (permission) => permission.users)
  @JoinTable()
  permissions?: Promise<Permission[]>;
}
