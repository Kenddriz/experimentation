import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { connexionOptions } from './configuration/connexionLoader';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppResolver } from './app.resolver';
import { PersonneModule } from './personne/personne.module';
import { MedecinModule } from './medecin/medecin.module';
import { MedicamentModule } from './medicament/medicament.module';
import { PrescriptionModule } from './prescription/prescription.module';
import { ConsultationModule } from './consultation/consultation.module';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => await connexionOptions(),
    }),
    GraphQLModule.forRoot({
      debug: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
    PersonneModule,
    MedecinModule,
    PatientModule,
    ConsultationModule,
    MedicamentModule,
    PrescriptionModule
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver],
})
export class AppModule {}
