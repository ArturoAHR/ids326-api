import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactType } from '../../entities/contact-type.entity';
import { ContactTypeController } from './contact-type.controller';
import { ContactTypeRepository } from './contact-type.repository';
import { ContactTypeService } from './contact-type.service';

@Module({
  imports: [TypeOrmModule.forFeature([ContactType, ContactTypeRepository])],
  providers: [ContactTypeService],
  controllers: [ContactTypeController],
})
export class ContactTypeModule {}
