import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разнуздать: PerfectVerb = {
  name: Word('разнуздать', 7),
  singular1stPerson: Word('разнуздаю', 7),
  singular2ndPerson: Word('разнуздаешь', 7),
  singular3rdPerson: Word('разнуздает', 7),
  plural1stPerson: Word('разнуздаем', 7),
  plural2ndPerson: Word('разнуздаете', 7),
  plural3rdPerson: Word('разнуздают', 7),
  masculinePast: Word('разнуздал', 7),
  femininePast: Word('разнуздала', 7),
  neuterPast: Word('разнуздало', 7),
  pluralPast: Word('разнуздали', 7),
  imperativeInformal: Word('разнуздай', 7),
  imperativeFormal: Word('разнуздайте', 7),
  imperfect: [],
};

perfectVerbs.set(разнуздать.name.text, разнуздать);

export { разнуздать };