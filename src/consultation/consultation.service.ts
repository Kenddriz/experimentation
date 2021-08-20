import { Injectable } from '@nestjs/common';
import { CreateConsultationInput } from './dto/create-consultation.input';
import { UpdateConsultationInput } from './dto/update-consultation.input';

@Injectable()
export class ConsultationService {
  create(createConsultationInput: CreateConsultationInput) {
    return 'This action adds a new consultation';
  }

  findAll() {
    return `This action returns all consultation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} consultation`;
  }

  update(id: number, updateConsultationInput: UpdateConsultationInput) {
    return `This action updates a #${id} consultation`;
  }

  remove(id: number) {
    return `This action removes a #${id} consultation`;
  }
}
