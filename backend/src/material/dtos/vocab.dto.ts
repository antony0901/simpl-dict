import {IsArray, IsNotEmpty, IsNotEmptyObject} from "class-validator";
import {VocabMeaning} from "../models/vocab-meaning.model";

export class VocabMeaningDto {
  @IsNotEmpty()
  meaning: string;

  @IsNotEmpty()
  example1: string;
  example2?: string;
  example3?: string;

  imageUrl1?: string;
  imageUrl2?: string;
}

export class CreateVocabularyDto {
  @IsNotEmpty()
  word: string;

  @IsArray()
  meanings: VocabMeaning[]
}