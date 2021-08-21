import { PersonneInput } from './personne.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePersonneInput extends PartialType(PersonneInput) {
  @Field(() => Int)
  id: number;
}
