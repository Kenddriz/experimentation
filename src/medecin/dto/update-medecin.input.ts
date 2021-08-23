import { MedecinInput } from './medecin.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMedecinInput extends PartialType(MedecinInput) {
  @Field()
  id: string;
}
