import { Injectable } from '@nestjs/common';
import { UpdateMedecinInput } from './dto/update-medecin.input';
import { Medecin } from './medecin.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class MedecinService {
  constructor(
    @InjectRepository(Medecin) private repository: Repository<Medecin>,
  ) {}
  async save(medecin: Medecin): Promise<Medecin> {
    return this.repository.save(medecin);
  }
  async findAll(): Promise<Medecin[]> {
    return this.repository.find();
  }
  async findOne(id: number): Promise<Medecin> {
    return this.repository.findOne(id);
  }
  async remove(id: number): Promise<DeleteResult> {
    return this.repository.delete(id);
  }
}
