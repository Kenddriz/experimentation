import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { Medecin } from '../medecin/medecin.entity';
import { Patient } from '../patient/patient.entity';
import { Prescription } from '../prescription/prescription.entity';

@ObjectType()
@Entity({ name: 'consultations' })
export class Consultation {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => Medecin)
  @ManyToOne(() => Medecin, (medecin) => medecin.consultations, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'medecinId' })
  medecin: Medecin;
  @RelationId((consultation: Consultation) => consultation.medecin)
  medecinId: number;

  @Field(() => Patient)
  @ManyToOne(() => Patient, (patient) => patient.consultations, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'patientId' })
  patient: Patient;
  @RelationId((consultation: Consultation) => consultation.patient)
  patientId: number;

  @Field(() => [Prescription])
  @OneToMany(() => Prescription, (pres) => pres.consultation, {
    onDelete: 'CASCADE',
    cascade: true,
  })
  prescriptions: Prescription[];

  @Field()
  @Column({ type: 'timestamp' })
  dateHeure: string;
}
