import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { Consultation } from '../consultation/consultation.entity';
import { Medicament } from '../medicament/medicament.entity';

@ObjectType()
@Entity({ name: 'prescriptions' })
export class Prescription {
  @Field()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field(() => Consultation)
  @ManyToOne(() => Consultation, (cons) => cons.prescriptions, {
    onDelete: 'CASCADE',
  })
  consultation: Consultation;
  @RelationId((prescription: Prescription) => prescription.consultation)
  consultationId: number;

  @ManyToOne(() => Medicament, (cons) => cons.prescriptions, {
    onDelete: 'CASCADE',
  })
  medicament: Medicament;
  @RelationId((prescription: Prescription) => prescription.medicament)
  medicamentId: number;

  @Field()
  @Column({ type: 'text', nullable: false })
  posologie: string;
}
