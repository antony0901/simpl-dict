import {Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {VocabDefinition} from "./vocab-meaning.model";

@Table({
  tableName: 'vocabs'
})
export class Vocabulary extends Model{
  @Column(DataType.CHAR(50))
  word: string;

  @HasMany(() => VocabDefinition)
  definitions: VocabDefinition[];

  @Column(DataType.INTEGER)
  createdBy: number;
}