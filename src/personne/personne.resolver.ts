import { Resolver, Mutation, Args, Int } from '@nestjs/graphql';
import { PersonneService } from './personne.service';
import { Personne } from './personne.entity';

@Resolver(() => Personne)
export class PersonneResolver {
  constructor(private personneService: PersonneService) {}
  @Mutation(() => Boolean)
  async removePersonne(@Args({ name: 'id', type: () => Int }) id: number) {
    const query = await this.personneService.remove(id);
    return query.affected > 0;
  }
}
