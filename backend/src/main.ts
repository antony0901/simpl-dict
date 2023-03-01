import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {dbContext} from './shared/insfrastructure/dbcontext';
import {ValidationPipe} from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  dbContext;
  await app.listen(3000);
}
bootstrap();
