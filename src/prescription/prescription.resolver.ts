import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Root,
} from '@nestjs/graphql';
import { PrescriptionService } from './prescription.service';
import { Prescription } from './prescription.entity';
import { UpdatePrescriptionInput } from './dto/update-prescription.input';
import { MedicamentService } from '../medicament/medicament.service';
import { Medicament } from '../medicament/medicament.entity';

@Resolver(() => Prescription)
export class PrescriptionResolver {
  constructor(
    private prescriptionService: PrescriptionService,
    private medicamentService: MedicamentService,
  ) {}

  @Query(() => [Prescription], { name: 'prescription' })
  findAll() {
    return this.prescriptionService.findAll();
  }

  @Query(() => Prescription, { name: 'prescription' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.prescriptionService.findOne(id);
  }

  @Mutation(() => Prescription)
  updatePrescription(
    @Args('updatePrescriptionInput')
    updatePrescriptionInput: UpdatePrescriptionInput,
  ) {
    return this.prescriptionService.update(
      updatePrescriptionInput.id,
      updatePrescriptionInput,
    );
  }

  @Mutation(() => Prescription)
  removePrescription(@Args('id', { type: () => Int }) id: number) {
    return this.prescriptionService.remove(id);
  }

  @ResolveField(() => Medicament)
  async medicament(@Root() prescription: Prescription): Promise<Medicament> {
    return this.medicamentService.findOne(prescription.medicamentId);
  }
}
