import { InputType, Field } from '@nestjs/graphql';
import { PersonneInput } from '../../personne/dto/personne.input';

@InputType()
export class PatientInput {
  @Field()
  numSS: string;

  @Field(() => PersonneInput)
  personne: PersonneInput;
}
