import { Global, Module } from '@nestjs/common';
import { PersonneService } from './personne.service';
import { PersonneResolver } from './personne.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personne } from './personne.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Personne])],
  providers: [PersonneResolver, PersonneService],
  exports: [PersonneService],
})
export class PersonneModule {}
