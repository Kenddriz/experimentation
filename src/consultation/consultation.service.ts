import { Injectable } from '@nestjs/common';
import { CreateConsultationInput } from './dto/create-consultation.input';
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
  create(createConsultationInput: CreateConsultationInput) {
    return 'This action adds a new consultation';
  }

  findAll() {
    return `This action returns all consultation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} consultation`;
  }
  async findByMedecin(medecinId: string): Promise<Consultation[]> {
    return this.repository
      .createQueryBuilder('c')
      .where('c.medecinId = :medecinId', { medecinId })
      .getMany();
  }
  update(id: number, updateConsultationInput: UpdateConsultationInput) {
    return `This action updates a #${id} consultation`;
  }

  remove(id: number) {
    return `This action removes a #${id} consultation`;
  }
}
