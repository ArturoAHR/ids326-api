import { Column } from 'typeorm';
import { BaseEntity } from './base.entity';

export class Person extends BaseEntity {
  @Column({ name: 'first_name', type: 'varchar' })
  firstName: string;

  @Column({ name: 'middle_name', type: 'varchar', nullable: true })
  middleName: string;

  @Column({ name: 'last_name', type: 'varchar' })
  lastName: string;

  @Column({ name: 'staff', type: 'boolean' })
  staff: boolean;

  @Column({ name: 'phone', type: 'varchar' })
  phone: string;

  @Column({ name: 'email', type: 'varchar' })
  email: string;

  @Column({ name: 'roleId', type: 'uuid' })
  roleId: string;

  @Column({ name: 'contactTypeId', type: 'uuid' })
  contactTypeId: string;

  @Column({ name: 'departmentId', type: 'uuid' })
  departmentId: string;

  @Column({ name: 'companyId', type: 'uuid' })
  companyId: string;

  // @ManyToOne(() => Role, { nullable: false, eager: true })
  // @JoinColumn({ name: 'role_id' })
  // role: Role;

  // @ManyToOne(() => ContactType, { nullable: false, eager: true })
  // @JoinColumn({ name: 'contact_type_id' })
  // role: ContactType;

  // @ManyToOne(() => DepartmentType, { nullable: false, eager: true })
  // @JoinColumn({ name: 'department_id' })
  // role: DepartmentType;

  // @ManyToOne(() => Company, { nullable: false, eager: true })
  // @JoinColumn({ name: 'company_id' })
  // role: Company;
}
