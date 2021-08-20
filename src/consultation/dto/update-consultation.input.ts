import { CreateConsultationInput } from './create-consultation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateConsultationInput extends PartialType(CreateConsultationInput) {
  @Field(() => Int)
  id: number;
}
