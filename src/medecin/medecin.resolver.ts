import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { MedecinService } from './medecin.service';
import { Medecin } from './medecin.entity';
import { CreateMedecinInput } from './dto/create-medecin.input';
import { UpdateMedecinInput } from './dto/update-medecin.input';

@Resolver(() => Medecin)
export class MedecinResolver {
  constructor(private readonly medecinService: MedecinService) {}

  @Mutation(() => Medecin)
  createMedecin(@Args('createMedecinInput') createMedecinInput: CreateMedecinInput) {
    return this.medecinService.create(createMedecinInput);
  }

  @Query(() => [Medecin], { name: 'medecin' })
  findAll() {
    return this.medecinService.findAll();
  }

  @Query(() => Medecin, { name: 'medecin' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.medecinService.findOne(id);
  }

  @Mutation(() => Medecin)
  updateMedecin(@Args('updateMedecinInput') updateMedecinInput: UpdateMedecinInput) {
    return this.medecinService.update(updateMedecinInput.id, updateMedecinInput);
  }

  @Mutation(() => Medecin)
  removeMedecin(@Args('id', { type: () => Int }) id: number) {
    return this.medecinService.remove(id);
  }
}
