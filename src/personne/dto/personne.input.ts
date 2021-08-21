import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class PersonneInput {
  @Field()
  nom: string;

  @Field()
  prenom: string;
}
