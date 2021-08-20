import { CreateMedicamentInput } from './create-medicament.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMedicamentInput extends PartialType(CreateMedicamentInput) {
  @Field(() => Int)
  id: number;
}
