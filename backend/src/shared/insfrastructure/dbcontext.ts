import {Sequelize} from "sequelize-typescript";
import {VocabMeaning} from "src/material/models/vocab-meaning.model";
import {Vocabulary} from "src/material/models/vocabulary.model";
import {Account} from "src/users/models/account.model";

const sequelize = new Sequelize({
  database: process.env.database || 'beaver_dict',
  username: process.env.username || 'postgres',
  password: process.env.password || '123456',
  port: 5432,
  dialect: 'postgres',
});
sequelize.addModels([Account, Vocabulary, VocabMeaning]);
sequelize.sync();
try {
  sequelize.authenticate();
} catch (error) {
  throw error;
}

export const dbContext = sequelize;