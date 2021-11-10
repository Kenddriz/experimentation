import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Personne } from './personne.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class PersonneService {
  constructor(
    @InjectRepository(Personne) private repository: Repository<Personne>,
  ) {}
  async remove(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
