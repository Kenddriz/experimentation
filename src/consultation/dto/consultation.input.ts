import { InputType, Int, Field } from '@nestjs/graphql';
import { PrescriptionInput } from '../../prescription/dto/prescription.input';

@InputType()
export class ConsultationInput {
  @Field(() => Int)
  medecinId: number;

  @Field(() => Int)
  patientId: number;

  @Field(() => [PrescriptionInput])
  medicaments: PrescriptionInput[];

  @Field()
  dateHeure: string;
}
