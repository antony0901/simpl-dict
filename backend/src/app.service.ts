import { Injectable } from '@nestjs/common';
import {catchError} from './shared/insfrastructure/error-handling';

@Injectable()
export class AppService {
  @catchError(Error, (err, ctx) => console.log(err))
  getHello(): string {
    return 'Hello World!';
  }
}
