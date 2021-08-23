import { Global, Module } from '@nestjs/common';
import { MedicamentService } from './medicament.service';
import { MedicamentResolver } from './medicament.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medicament } from './medicament.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Medicament])],
  providers: [MedicamentResolver, MedicamentService],
  exports: [MedicamentService],
})
export class MedicamentModule {}
