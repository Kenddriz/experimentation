import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { loadEnvVariables } from './configuration/connexionLoader';

loadEnvVariables().then(async () => {
  const app = await NestFactory.create<NestExpressApplication>(
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('./app.module').AppModule,
  );
  await app.listen(process.env.PORT, '0.0.0.0');
  console.log(
    'Connexion au serveur établie (http://localhost:' + process.env.PORT + ')',
  );
});
