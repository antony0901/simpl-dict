import {Injectable} from "@nestjs/common";

@Injectable()
export class Logger {
  logError(message: string, obj: any) {
    console.log(message, obj);
  }
}