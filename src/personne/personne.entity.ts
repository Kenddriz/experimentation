import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'personnes' })
export class Personne {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ length: 25, nullable: false })
  nom: string;

  @Field()
  @Column({ length: 25, nullable: false })
  prenom: string;
}
