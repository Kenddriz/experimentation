import { Injectable } from '@nestjs/common';
import { UpdatePrescriptionInput } from './dto/update-prescription.input';
import { Prescription } from './prescription.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PrescriptionService {
  constructor(
    @InjectRepository(Prescription)
    private repository: Repository<Prescription>,
  ) {}
  async save(precription: Prescription): Promise<Prescription> {
    return this.repository.save(precription);
  }

  findAll() {
    return `This action returns all prescription`;
  }

  async findOne(id: number): Promise<Prescription> {
    return this.repository.findOne(id);
  }

  async findOneByConsultation(consultationId: string): Promise<Prescription[]> {
    return this.repository
      .createQueryBuilder('p')
      .where('p.consultationId = :consultationId', { consultationId })
      .getMany();
  }

  update(id: number, updatePrescriptionInput: UpdatePrescriptionInput) {
    return `This action updates a #${id} prescription`;
  }

  remove(id: number) {
    return `This action removes a #${id} prescription`;
  }
}
