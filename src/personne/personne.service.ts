import { Injectable } from '@nestjs/common';
import { PersonneInput } from './dto/personne.input';
import { UpdatePersonneInput } from './dto/update-personne.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Personne } from './personne.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class PersonneService {
  constructor(
    @InjectRepository(Personne) private repository: Repository<Personne>,
  ) {}
  create(createPersonneInput: PersonneInput) {
    return 'This action adds a new personne';
  }

  update(id: number, updatePersonneInput: UpdatePersonneInput) {
    return `This action updates a #${id} personne`;
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
