import { Injectable } from '@nestjs/common';
import { CreateMedecinInput } from './dto/create-medecin.input';
import { UpdateMedecinInput } from './dto/update-medecin.input';

@Injectable()
export class MedecinService {
  create(createMedecinInput: CreateMedecinInput) {
    return 'This action adds a new medecin';
  }

  findAll() {
    return `This action returns all medecin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medecin`;
  }

  update(id: number, updateMedecinInput: UpdateMedecinInput) {
    return `This action updates a #${id} medecin`;
  }

  remove(id: number) {
    return `This action removes a #${id} medecin`;
  }
}
