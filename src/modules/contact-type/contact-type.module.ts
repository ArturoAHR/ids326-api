import { Module } from '@nestjs/common';
import { ContactTypeController } from './contact-type.controller';
import { ContactTypeService } from './contact-type.service';

@Module({
  providers: [ContactTypeService],
  controllers: [ContactTypeController],
})
export class ContactTypeModule {}
