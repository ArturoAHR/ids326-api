import { Column } from 'typeorm';
import { BaseEntity } from './base.entity';

export class User extends BaseEntity {
  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'password_hash', type: 'varchar' })
  passwordHash: string;

  @Column({ name: 'password_salt', type: 'varchar' })
  passwordSalt: string;

  @Column({ name: 'license_type_id', type: 'varchar' })
  licenseTypeId: string;

  // @ManyToOne(() => LicenseType, { nullable: false, eager: true })
  // @JoinColumn({ name: 'license_type_id' })
  // licenseType: LicenseType;
}
