import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MedicamentService } from './medicament.service';
import { Medicament } from './medicament.entity';
import { MedicamentInput } from './dto/medicament.input';
import { UpdateMedicamentInput } from './dto/update-medicament.input';

@Resolver(() => Medicament)
export class MedicamentResolver {
  constructor(private medicamentService: MedicamentService) {}

  @Mutation(() => Medicament)
  async createMedicament(
    @Args('input') input: MedicamentInput,
  ): Promise<Medicament> {
    const med = new Medicament();
    Object.assign(med, input);
    return await this.medicamentService.save(med);
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
  async updateMedicament(@Args('input') input: UpdateMedicamentInput) {
    const med = await this.medicamentService.findOne(input.id);
    Object.assign(med, input);
    return this.medicamentService.save(med);
  }

  @Mutation(() => Medicament)
  removeMedicament(@Args('id', { type: () => Int }) id: number) {
    return this.medicamentService.remove(id);
  }
}
