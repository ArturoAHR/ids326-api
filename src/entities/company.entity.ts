import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Person } from './person.entity';

@Entity('company')
export class Company extends BaseEntity {
  @Column({ name: 'name', type: 'varchar' })
  name: string;

  @Column({ name: 'ceo_id', type: 'uuid', nullable: true })
  ceoId: string;

  @Column({ name: 'primary_phone', type: 'varchar' })
  primaryPhone: string;

  @Column({ name: 'secondary_phone', type: 'varchar', nullable: true })
  secondaryPhone: string;

  @Column({ name: 'fax', type: 'varchar' })
  fax: string;

  @Column({ name: 'email', type: 'varchar', nullable: true })
  email: string;

  @Column({ name: 'website', type: 'varchar', nullable: true })
  website: string;

  @OneToOne(() => Person, {})
  @JoinColumn({ name: 'ceo_id' })
  ceo: Promise<Person>;
}
