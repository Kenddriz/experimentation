import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Personne } from '../personne/personne.entity';
import { Consultation } from '../consultation/consultation.entity';

@ObjectType()
@Entity({ name: 'medecins' })
export class Medecin {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ unique: true })
  matricule: string;

  @Field(() => Personne)
  @OneToOne(() => Personne, { eager: true, cascade: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'personneId', referencedColumnName: 'id' })
  personne: Personne;

  @Field(() => [Consultation])
  @OneToMany(() => Consultation, (consultation) => consultation.medecin, {
    cascade: ['remove', 'soft-remove', 'recover'],
    onDelete: 'CASCADE',
  })
  consultations: Consultation[];
}
