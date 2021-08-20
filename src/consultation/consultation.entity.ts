import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Medecin } from '../medecin/medecin.entity';
import { Patient } from '../patient/patient.entity';

@ObjectType()
@Entity({ name: 'consultations' })
export class Consultation {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => Medecin)
  @ManyToOne(() => Medecin, (medecin) => medecin.consultations)
  medecin: Medecin;

  @Field(() => Patient)
  @ManyToOne(() => Patient, (patient) => patient.consultations)
  patient: Patient;

  @Field()
  @Column()
  dateHeure: string;
}
