import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UserModule} from './users/user.module';
import {MaterialModule} from './material/material.module';

@Module({
  imports: [UserModule, MaterialModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
