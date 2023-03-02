import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {VocabMeaning} from "./vocab-meaning.model";

@Table({
  tableName: 'vocabs'
})
export class Vocabulary extends Model{
  @Column(DataType.CHAR(50))
  word: string;

  @HasMany(() => VocabMeaning)
  meanings: VocabMeaning[];

  @Column(DataType.INTEGER)
  createdBy: number;
}