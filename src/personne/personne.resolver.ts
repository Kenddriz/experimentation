import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PersonneService } from './personne.service';
import { Personne } from './personne.entity';
import { PersonneInput } from './dto/personne.input';
import { UpdatePersonneInput } from './dto/update-personne.input';

@Resolver(() => Personne)
export class PersonneResolver {
  constructor(private readonly personneService: PersonneService) {}

  @Mutation(() => Personne)
  createPersonne(@Args('createPersonneInput') createPersonneInput: PersonneInput) {
    return this.personneService.create(createPersonneInput);
  }

  @Query(() => [Personne], { name: 'personne' })
  findAll() {
    return this.personneService.findAll();
  }

  @Query(() => Personne, { name: 'personne' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.personneService.findOne(id);
  }

  @Mutation(() => Personne)
  updatePersonne(@Args('updatePersonneInput') updatePersonneInput: UpdatePersonneInput) {
    return this.personneService.update(updatePersonneInput.id, updatePersonneInput);
  }

  @Mutation(() => Personne)
  removePersonne(@Args('id', { type: () => Int }) id: number) {
    return this.personneService.remove(id);
  }
}
