import { Module } from '@nestjs/common';
import { PersonneService } from './personne.service';
import { PersonneResolver } from './personne.resolver';

@Module({
  providers: [PersonneResolver, PersonneService]
})
export class PersonneModule {}
