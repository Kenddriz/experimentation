import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class MedicamentInput {
  @Field()
  nomCommercial: string;
}
