import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Vocabulary} from "./vocabulary.model";

@Table({
  tableName: 'vocab_meanings'
})
export class VocabMeaning extends Model{
  @Column(DataType.CHAR(250))
  meaning: string;

  @Column
  example1: string;

  @Column
  example2: string;

  @Column
  example3: string;

  @Column
  imageUrl1: string;

  @Column
  imageUrl2: string;

  @ForeignKey(() => Vocabulary)
  vocabId: number;
  
  @BelongsTo(() => Vocabulary)
  vocab: Vocabulary;
}