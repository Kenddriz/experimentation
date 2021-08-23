import { MedicamentInput } from './medicament.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMedicamentInput extends PartialType(MedicamentInput) {
  @Field(() => Int)
  id: number;
}
