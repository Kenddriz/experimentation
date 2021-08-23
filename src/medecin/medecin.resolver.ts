import {
  Resolver,
  Query,
  Mutation,
  Args,
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

@Resolver(() => Medecin)
export class MedecinResolver {
  constructor(
    private medecinService: MedecinService,
    private consultationService: ConsultationService,
  ) {}

  @Mutation(() => Medecin)
  async createMedecin(@Args('input') input: MedecinInput) {
    const medecin = new Medecin();
    medecin.matricule = input.matricule;
    const personne = new Personne();
    Object.assign(personne, input.personne);
    medecin.personne = personne;
    return await this.medecinService.save(medecin);
  }

  @Query(() => [Medecin])
  findAllMedecins() {
    return this.medecinService.findAll();
  }

  @Mutation(() => Medecin)
  async updateMedecin(@Args('input') input: UpdateMedecinInput) {
    const medecin = await this.medecinService.findOneByMatricule(input.id);
    return this.medecinService.save(medecin);
  }

  @ResolveField(() => [Consultation])
  consultations(@Root() medecin: Medecin): Promise<Consultation[]> {
    return this.consultationService.findByMedecin(medecin.id);
  }
}
