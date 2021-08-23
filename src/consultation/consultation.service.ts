import { Injectable } from '@nestjs/common';
import { ConsultationInput } from './dto/consultation.input';
import { UpdateConsultationInput } from './dto/update-consultation.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Consultation } from './consultation.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ConsultationService {
  constructor(
    @InjectRepository(Consultation)
    private repository: Repository<Consultation>,
  ) {}
  async save(consultation: Consultation) {
    return this.repository.save(consultation);
  }

  async findAll(): Promise<Consultation[]> {
    return this.repository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} consultation`;
  }
  async findByMedecin(medecinId: number): Promise<Consultation[]> {
    return this.repository
      .createQueryBuilder('c')
      .where('c.medecinId = :medecinId', { medecinId })
      .getMany();
  }
  async findByPatient(patientId: string): Promise<Consultation[]> {
    return this.repository
      .createQueryBuilder('c')
      .where('c.patientId = :patientId', { patientId })
      .getMany();
  }
  update(id: number, updateConsultationInput: UpdateConsultationInput) {
    return `This action updates a #${id} consultation`;
  }

  remove(id: number) {
    return `This action removes a #${id} consultation`;
  }
}
