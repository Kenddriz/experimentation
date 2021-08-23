import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Medicament } from './medicament.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MedicamentService {
  constructor(
    @InjectRepository(Medicament) private repository: Repository<Medicament>,
  ) {}
  async save(med: Medicament): Promise<Medicament> {
    return this.repository.save(med);
  }

  async findAll(): Promise<Medicament[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Medicament> {
    return this.repository.findOne(id);
  }
  async findByIds(ids: number[]): Promise<Medicament[]> {
    return this.repository.findByIds(ids);
  }
  async remove(id: number): Promise<boolean> {
    const query = await this.repository.delete(id);
    return query.affected > 0;
  }
}
