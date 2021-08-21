import { MedecinInput } from './medecin.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMedecinInput extends PartialType(MedecinInput) {
  @Field(() => Int)
  id: number;
}
