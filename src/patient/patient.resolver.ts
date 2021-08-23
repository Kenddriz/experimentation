import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Root,
} from '@nestjs/graphql';
import { ConsultationService } from '../consultation/consultation.service';
import { Personne } from '../personne/personne.entity';
import { Consultation } from '../consultation/consultation.entity';
import { PatientService } from './patient.service';
import { PatientInput } from './dto/patient.input';
import { Patient } from './patient.entity';
import { UpdatePatientInput } from './dto/update-patient.input';

@Resolver(() => Patient)
export class PatientResolver {
  constructor(
    private patientService: PatientService,
    private consultationService: ConsultationService,
  ) {}

  @Mutation(() => Patient)
  createPatient(@Args('input') input: PatientInput) {
    const patient = new Patient();
    patient.numSS = input.numSS;
    const personne = new Personne();
    Object.assign(personne, input.personne);
    patient.personne = personne;
    return this.patientService.save(patient);
  }

  @Query(() => [Patient], { name: 'Patient' })
  findAll() {
    return this.patientService.findAll();
  }

  @Mutation(() => Patient)
  async updatePatient(@Args('input') input: UpdatePatientInput) {
    const Patient = await this.patientService.findOneById(input.id);
    return this.patientService.save(Patient);
  }

  @ResolveField(() => [Consultation])
  consultations(@Root() patient: Patient): Promise<Consultation[]> {
    return this.consultationService.findByPatient(patient.id);
  }
}
