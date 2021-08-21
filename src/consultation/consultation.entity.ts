import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, RelationId } from 'typeorm';
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
  @JoinColumn({ name: 'medecinId', referencedColumnName: 'matricule' })
  medecin: Medecin;
  @RelationId((consultation: Consultation) => consultation.medecin)
  medecinId: string;

  @Field(() => Patient)
  @ManyToOne(() => Patient, (patient) => patient.consultations)
  @JoinColumn({ name: 'patientId', referencedColumnName: 'numSS' })
  patient: Patient;
  @RelationId((consultation: Consultation) => consultation.patient)
  patientId: string;

  @Field()
  @Column()
  dateHeure: string;
}
