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
@Entity({ name: 'patients' })
export class Patient {
  @Field()
  @PrimaryGeneratedColumn()
  id: string;

  @Field()
  @Column({ unique: true })
  numSS: string;

  @Field(() => [Consultation])
  @OneToMany(() => Consultation, (consultation) => consultation.medecin, {
    onDelete: 'CASCADE',
  })
  consultations: Consultation[];

  @Field(() => Personne)
  @OneToOne(() => Personne, { eager: true, onDelete: 'CASCADE', cascade: true })
  @JoinColumn({ name: 'personneId' })
  personne: Personne;
}
