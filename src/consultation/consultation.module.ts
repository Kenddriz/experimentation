import { Global, Module } from '@nestjs/common';
import { ConsultationService } from './consultation.service';
import { ConsultationResolver } from './consultation.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consultation } from './consultation.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Consultation])],
  providers: [ConsultationResolver, ConsultationService],
  exports: [ConsultationService],
})
export class ConsultationModule {}
