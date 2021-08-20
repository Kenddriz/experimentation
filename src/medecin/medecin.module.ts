import { Module } from '@nestjs/common';
import { MedecinService } from './medecin.service';
import { MedecinResolver } from './medecin.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medecin } from './medecin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Medecin])],
  providers: [MedecinResolver, MedecinService],
})
export class MedecinModule {}
