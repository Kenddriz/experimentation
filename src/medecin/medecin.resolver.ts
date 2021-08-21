import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Root,
} from '@nestjs/graphql';
import { MedecinService } from './medecin.service';
import { Medecin } from './medecin.entity';
import { MedecinInput } from './dto/medecin.input';
import { UpdateMedecinInput } from './dto/update-medecin.input';
import { Personne } from '../personne/personne.entity';
import { Consultation } from '../consultation/consultation.entity';
import { ConsultationService } from '../consultation/consultation.service';
import { DeleteResult } from 'typeorm';

@Resolver(() => Medecin)
export class MedecinResolver {
  constructor(
    private medecinService: MedecinService,
    private consultationService: ConsultationService,
  ) {}

  @Mutation(() => Medecin)
  createMedecin(@Args('input') input: MedecinInput) {
    const medecin = new Medecin();
    medecin.matricule = input.matricule;
    const personne = new Personne();
    Object.assign(personne, input.personne);
    personne.id = input.matricule;
    medecin.personne = personne;
    return this.medecinService.save(medecin);
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
  async updateMedecin(@Args('input') input: UpdateMedecinInput) {
    const medecin = await this.medecinService.findOne(input.id);
    return this.medecinService.save(medecin);
  }

  @Mutation(() => Boolean)
  async removeMedecin(@Args('id', { type: () => Int }) id: number) {
    const remove = await this.medecinService.remove(id);
    console.log(remove);
    return true;
  }

  @ResolveField(() => [Consultation])
  async consultations(@Root() medecin: Medecin): Promise<Consultation[]> {
    return this.consultationService.findByMedecin(medecin.matricule);
  }
}
