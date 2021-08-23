import { Global, Module } from '@nestjs/common';
import { MedecinService } from './medecin.service';
import { MedecinResolver } from './medecin.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medecin } from './medecin.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Medecin])],
  providers: [MedecinResolver, MedecinService],
  exports: [MedecinService],
})
export class MedecinModule {}
