import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Company } from './entities/company.entity';
import { ContactType } from './entities/contact-type.entity';
import { Department } from './entities/department.entity';
import { LicenseType } from './entities/license-type.entity';
import { Permission } from './entities/permission.entity';
import { Person } from './entities/person.entity';
import { Role } from './entities/role.entity';
import { User } from './entities/user.entity';
import { PersonModule } from './modules/person/person.module';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.TYPEORM_HOST,
      port: Number(process.env.TYPEORM_PORT),
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [
        process.env.TYPEORM_ENTITIES,
        Person,
        Role,
        ContactType,
        Company,
        Department,
        LicenseType,
        Permission,
        User,
      ],
      cli: {
        migrationsDir: process.env.TYPEORM_MIGRATIONS,
      },
      autoLoadEntities: true,
    }),
    PersonModule,
  ],
})
export class AppModule {}
