import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Root,
} from '@nestjs/graphql';
import { ConsultationService } from './consultation.service';
import { Consultation } from './consultation.entity';
import { ConsultationInput } from './dto/consultation.input';
import { UpdateConsultationInput } from './dto/update-consultation.input';
import { MedecinService } from '../medecin/medecin.service';
import { MedicamentService } from '../medicament/medicament.service';
import { PatientService } from '../patient/patient.service';
import { Prescription } from '../prescription/prescription.entity';
import { Medecin } from '../medecin/medecin.entity';
import { Patient } from '../patient/patient.entity';
import { PrescriptionService } from '../prescription/prescription.service';

@Resolver(() => Consultation)
export class ConsultationResolver {
  constructor(
    private consultationService: ConsultationService,
    private medecinService: MedecinService,
    private medicamentService: MedicamentService,
    private patientService: PatientService,
    private prescriptionService: PrescriptionService,
  ) {}

  @Mutation(() => Consultation)
  async createConsultation(@Args('input') input: ConsultationInput) {
    const consultation = new Consultation();
    consultation.dateHeure = input.dateHeure;
    consultation.medecin = await this.medecinService.findOneById(
      input.medecinId,
    );
    consultation.patient = await this.patientService.findOneById(
      input.patientId,
    );

    const medicaments = await this.medicamentService.findByIds(
      input.medicaments.map((m) => m.medicamentId),
    );

    const prescriptions: Prescription[] = [];

    input.medicaments.forEach((med) => {
      const prescription = new Prescription();
      prescription.posologie = med.posologie;
      prescription.medicament = medicaments.find(
        (m) => m.id === med.medicamentId,
      );
      prescriptions.push(prescription);
    });
    consultation.prescriptions = prescriptions;

    return await this.consultationService.save(consultation);
  }

  @Query(() => [Consultation])
  async findAllConsultations(): Promise<Consultation[]> {
    return await this.consultationService.findAll();
  }

  @Query(() => Consultation, { name: 'consultation' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.consultationService.findOne(id);
  }

  @Mutation(() => Consultation)
  updateConsultation(
    @Args('updateConsultationInput')
    updateConsultationInput: UpdateConsultationInput,
  ) {
    return this.consultationService.update(
      updateConsultationInput.id,
      updateConsultationInput,
    );
  }

  @Mutation(() => Consultation)
  removeConsultation(@Args('id', { type: () => Int }) id: number) {
    return this.consultationService.remove(id);
  }

  @ResolveField(() => Medecin)
  async medecin(@Root() consultation: Consultation): Promise<Medecin> {
    return this.medecinService.findOneById(consultation.medecinId);
  }
  @ResolveField(() => Patient)
  async patient(@Root() consultation: Consultation): Promise<Patient> {
    return this.patientService.findOneById(consultation.patientId);
  }
  @ResolveField(() => [Prescription])
  async prescriptions(
    @Root() consultation: Consultation,
  ): Promise<Prescription[]> {
    return this.prescriptionService.findOneByConsultation(consultation.id);
  }
}
