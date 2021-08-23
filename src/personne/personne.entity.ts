import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Medecin } from '../medecin/medecin.entity';
import { Patient } from '../patient/patient.entity';

@ObjectType()
@Entity({ name: 'personnes' })
export class Personne {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ length: 25, nullable: false })
  nom: string;

  @Field()
  @Column({ length: 25, nullable: false })
  prenom: string;

  @OneToOne(() => Medecin, (med) => med.personne, { onDelete: 'CASCADE' })
  medecin: Medecin;

  @OneToOne(() => Patient, (patient) => patient.personne, {
    onDelete: 'CASCADE',
  })
  patient: Patient;
}
