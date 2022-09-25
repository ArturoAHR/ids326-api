import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Company } from './company.entity';
import { ContactType } from './contact-type.entity';
import { Department } from './department.entity';
import { Role } from './role.entity';

@Entity('person')
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

  @Column({ name: 'role_id', type: 'uuid' })
  roleId: string;

  @Column({ name: 'contact_type_id', type: 'uuid' })
  contactTypeId: string;

  @Column({ name: 'department_id', type: 'uuid' })
  departmentId: string;

  @Column({ name: 'company_id', type: 'uuid' })
  companyId: string;

  @ManyToOne(() => Role, {})
  @JoinColumn({ name: 'role_id', referencedColumnName: 'id' })
  role?: Promise<Role>;

  @ManyToOne(() => ContactType, {})
  @JoinColumn({ name: 'contact_type_id', referencedColumnName: 'id' })
  contactType?: Promise<ContactType>;

  @ManyToOne(() => Department, {})
  @JoinColumn({ name: 'department_id', referencedColumnName: 'id' })
  department?: Promise<Department>;

  @ManyToOne(() => Company, {})
  @JoinColumn({ name: 'company_id', referencedColumnName: 'id' })
  company?: Promise<Company>;
}
