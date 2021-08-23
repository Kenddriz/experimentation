import { ConsultationInput } from './consultation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateConsultationInput extends PartialType(ConsultationInput) {
  @Field(() => Int)
  id: number;
}
