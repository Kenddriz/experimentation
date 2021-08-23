import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class PrescriptionInput {
  @Field(() => Int)
  medicamentId: number;

  @Field()
  posologie: string;
}
