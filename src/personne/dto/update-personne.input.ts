import { CreatePersonneInput } from './create-personne.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePersonneInput extends PartialType(CreatePersonneInput) {
  @Field(() => Int)
  id: number;
}
