import { Injectable } from '@nestjs/common';
import { PersonneInput } from './dto/personne.input';
import { UpdatePersonneInput } from './dto/update-personne.input';

@Injectable()
export class PersonneService {
  create(createPersonneInput: PersonneInput) {
    return 'This action adds a new personne';
  }

  findAll() {
    return `This action returns all personne`;
  }

  findOne(id: number) {
    return `This action returns a #${id} personne`;
  }

  update(id: number, updatePersonneInput: UpdatePersonneInput) {
    return `This action updates a #${id} personne`;
  }

  remove(id: number) {
    return `This action removes a #${id} personne`;
  }
}
