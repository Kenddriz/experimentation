import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Prescription } from '../prescription/prescription.entity';

@ObjectType()
@Entity({ name: 'medicaments' })
export class Medicament {
  @Field()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field()
  @Column({ name: 'nomCommercial', length: 25, nullable: false })
  nomCommercial: string;

  @Field(() => [Prescription])
  @OneToMany(() => Prescription, (pres) => pres.medicament, {
    onDelete: 'CASCADE',
  })
  prescriptions: Prescription[];
}
