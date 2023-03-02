import {Injectable} from "@nestjs/common";
import {CreateVocabularyDto} from "../dtos/vocab.dto";
import {Vocabulary} from "../models/vocabulary.model";
import {VocabDefinition} from "../models/vocab-meaning.model";
import {dbContext} from "src/shared/insfrastructure/dbcontext";

@Injectable()
export class VocabularyService {
  async createVocab(payload: CreateVocabularyDto) {
    const t = await dbContext.transaction();
    try {
      const newVocab = await Vocabulary.create({
        word: payload.word
      }, {transaction: t})
      const definitions = [];
      payload.meanings.forEach((item) => {
        definitions.push({
          vocabId: newVocab.id!,
          meaning: item.meaning,
          example1: item.example1,
          example2: item.example2,
          example3: item.example3,
          imageUrl1: item.imageUrl1,
          imageUrl2: item.imageUrl2,
          natureOfDef: item.natureOfDef
        } as VocabDefinition)
      })
      await VocabDefinition.bulkCreate(definitions, {transaction: t});
      await t.commit();
      return newVocab;
    } catch (error) {
      console.log(error);
      await t.rollback();
      throw error;
    }
    
  }
}