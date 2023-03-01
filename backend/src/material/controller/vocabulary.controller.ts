import {Body, Controller, Post} from "@nestjs/common";
import {CreateVocabularyDto} from "../dtos/vocab.dto";
import {VocabularyService} from "../services/vocab.service";

@Controller('vocabs')
export class VocabularyController {
  constructor(private readonly _vocabService: VocabularyService){}

  @Post()
  createVocab(@Body() payload: CreateVocabularyDto) {
    return this._vocabService.createVocab(payload);
  }
}