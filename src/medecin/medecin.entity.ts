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
@Entity({ name: 'medecins' })
export class Medecin {
  @Field()
  @PrimaryColumn()
  matricule: string;

  @Field(() => Personne)
  @OneToOne(() => Personne, { cascade: true })
  @JoinColumn({ name: 'personneId' })
  personne: Personne;

  @Field(() => [Consultation])
  @OneToMany(() => Consultation, (consultation) => consultation.medecin, {
    cascade: ['remove', 'soft-remove', 'recover'],
  })
  consultations: Consultation[];
}
