import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ConsultationService } from './consultation.service';
import { Consultation } from './consultation.entity';
import { CreateConsultationInput } from './dto/create-consultation.input';
import { UpdateConsultationInput } from './dto/update-consultation.input';

@Resolver(() => Consultation)
export class ConsultationResolver {
  constructor(private readonly consultationService: ConsultationService) {}

  @Mutation(() => Consultation)
  createConsultation(@Args('createConsultationInput') createConsultationInput: CreateConsultationInput) {
    return this.consultationService.create(createConsultationInput);
  }

  @Query(() => [Consultation], { name: 'consultation' })
  findAll() {
    return this.consultationService.findAll();
  }

  @Query(() => Consultation, { name: 'consultation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.consultationService.findOne(id);
  }

  @Mutation(() => Consultation)
  updateConsultation(@Args('updateConsultationInput') updateConsultationInput: UpdateConsultationInput) {
    return this.consultationService.update(updateConsultationInput.id, updateConsultationInput);
  }

  @Mutation(() => Consultation)
  removeConsultation(@Args('id', { type: () => Int }) id: number) {
    return this.consultationService.remove(id);
  }
}
