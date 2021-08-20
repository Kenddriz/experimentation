import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMedicamentInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
