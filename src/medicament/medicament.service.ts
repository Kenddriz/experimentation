import { Injectable } from '@nestjs/common';
import { CreateMedicamentInput } from './dto/create-medicament.input';
import { UpdateMedicamentInput } from './dto/update-medicament.input';

@Injectable()
export class MedicamentService {
  create(createMedicamentInput: CreateMedicamentInput) {
    return 'This action adds a new medicament';
  }

  findAll() {
    return `This action returns all medicament`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicament`;
  }

  update(id: number, updateMedicamentInput: UpdateMedicamentInput) {
    return `This action updates a #${id} medicament`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicament`;
  }
}
