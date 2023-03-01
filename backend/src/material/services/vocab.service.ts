import {Injectable} from "@nestjs/common";
import {CreateVocabularyDto} from "../dtos/vocab.dto";
import {Vocabulary} from "../models/vocabulary.model";
import {VocabMeaning} from "../models/vocab-meaning.model";

@Injectable()
export class VocabularyService {
  async createVocab(payload: CreateVocabularyDto) {
    const newVocab = await Vocabulary.create({
      word: payload.word
    })
    const meanings = [];
    payload.meanings.forEach((item) => {
      meanings.push({
        vocabId: newVocab.id!,
        meaning: item.meaning,
        example1: item.example1,
        example2: item.example2,
        example3: item.example3,
        imageUrl1: item.imageUrl1,
        imageUrl2: item.imageUrl2
      } as VocabMeaning)
    })
    await VocabMeaning.bulkCreate(meanings);
    return newVocab;
  }
}