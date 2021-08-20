import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MedicamentService } from './medicament.service';
import { Medicament } from './medicament.entity';
import { CreateMedicamentInput } from './dto/create-medicament.input';
import { UpdateMedicamentInput } from './dto/update-medicament.input';

@Resolver(() => Medicament)
export class MedicamentResolver {
  constructor(private readonly medicamentService: MedicamentService) {}

  @Mutation(() => Medicament)
  createMedicament(@Args('createMedicamentInput') createMedicamentInput: CreateMedicamentInput) {
    return this.medicamentService.create(createMedicamentInput);
  }

  @Query(() => [Medicament], { name: 'medicament' })
  findAll() {
    return this.medicamentService.findAll();
  }

  @Query(() => Medicament, { name: 'medicament' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.medicamentService.findOne(id);
  }

  @Mutation(() => Medicament)
  updateMedicament(@Args('updateMedicamentInput') updateMedicamentInput: UpdateMedicamentInput) {
    return this.medicamentService.update(updateMedicamentInput.id, updateMedicamentInput);
  }

  @Mutation(() => Medicament)
  removeMedicament(@Args('id', { type: () => Int }) id: number) {
    return this.medicamentService.remove(id);
  }
}
