import {Module} from "@nestjs/common";
import {VocabularyController} from "./controller/vocabulary.controller";
import {VocabularyService} from "./services/vocab.service";

@Module({
  imports: [],
  controllers: [VocabularyController],
  providers: [VocabularyService]
})

export class MaterialModule {}