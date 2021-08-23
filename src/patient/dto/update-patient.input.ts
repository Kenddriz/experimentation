import { PatientInput } from './patient.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePatientInput extends PartialType(PatientInput) {
  @Field(() => Int)
  id: number;
}
