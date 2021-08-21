import { InputType, Field } from '@nestjs/graphql';
import { PersonneInput } from '../../personne/dto/personne.input';

@InputType()
export class MedecinInput {
  @Field()
  matricule: string;

  @Field(() => PersonneInput)
  personne: PersonneInput;
}
