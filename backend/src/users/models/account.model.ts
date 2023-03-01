import {Column, DataType, Model, Table} from "sequelize-typescript";

@Table({
  tableName: 'accounts'
})
export class Account extends Model {
  @Column(DataType.CHAR(250))
  name: string;

  @Column(DataType.CHAR(250))
  providerId: string;
}