import { CreateMedecinInput } from './create-medecin.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMedecinInput extends PartialType(CreateMedecinInput) {
  @Field(() => Int)
  id: number;
}
