import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обуздать: PerfectVerb = {
  name: Word('обуздать', 5),
  singular1stPerson: Word('обуздаю', 5),
  singular2ndPerson: Word('обуздаешь', 5),
  singular3rdPerson: Word('обуздает', 5),
  plural1stPerson: Word('обуздаем', 5),
  plural2ndPerson: Word('обуздаете', 5),
  plural3rdPerson: Word('обуздают', 5),
  masculinePast: Word('обуздал', 5),
  femininePast: Word('обуздала', 5),
  neuterPast: Word('обуздало', 5),
  pluralPast: Word('обуздали', 5),
  imperativeInformal: Word('обуздай', 5),
  imperativeFormal: Word('обуздайте', 5),
  imperfect: [],
};

perfectVerbs.set(обуздать.name.text, обуздать);

export { обуздать };