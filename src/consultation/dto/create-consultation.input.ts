import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateConsultationInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
