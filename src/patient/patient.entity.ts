import { ObjectType, Field } from '@nestjs/graphql';
import {
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { Personne } from '../personne/personne.entity';
import { Consultation } from '../consultation/consultation.entity';

@ObjectType()
@Entity({ name: 'patients' })
export class Patient {
  @Field()
  @PrimaryColumn({ name: 'num_ss' })
  numSS: string;

  @Field(() => [Consultation])
  @OneToMany(() => Consultation, (consultation) => consultation.medecin)
  consultations: Consultation[];

  @Field(() => Personne)
  @OneToOne(() => Personne)
  @JoinColumn()
  personne: Personne;
}
