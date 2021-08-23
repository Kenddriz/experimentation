import { Injectable } from '@nestjs/common';
import { UpdatePatientInput } from './dto/update-patient.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Patient } from './patient.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient) private repository: Repository<Patient>,
  ) {}
  async save(patient: Patient): Promise<Patient> {
    return this.repository.save(patient);
  }
  async findAll(): Promise<Patient[]> {
    return this.repository.find();
  }
  async findOneById(id: number): Promise<Patient> {
    return this.repository.findOne(id);
  }
  async findOneByNumSS(numSS: string): Promise<Patient> {
    return this.repository.findOne({ numSS });
  }
  async remove(id: string): Promise<boolean> {
    const query = await this.repository.delete(id);
    return query.affected > 0;
  }

  update(id: number, updatePatientInput: UpdatePatientInput) {
    return `This action updates a #${id} patient`;
  }
}
