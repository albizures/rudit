import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разнуздывать: PerfectVerb = {
  name: Word('разнуздывать', 4),
  singular1stPerson: Word('разнуздываю', 4),
  singular2ndPerson: Word('разнуздываешь', 4),
  singular3rdPerson: Word('разнуздывает', 4),
  plural1stPerson: Word('разнуздываем', 4),
  plural2ndPerson: Word('разнуздываете', 4),
  plural3rdPerson: Word('разнуздывают', 4),
  masculinePast: Word('разнуздывал', 4),
  femininePast: Word('разнуздывала', 4),
  neuterPast: Word('разнуздывало', 4),
  pluralPast: Word('разнуздывали', 4),
  imperativeInformal: Word('разнуздывай', 4),
  imperativeFormal: Word('разнуздывайте', 4),
  imperfect: [],
};

perfectVerbs.set(разнуздывать.name.text, разнуздывать);

export { разнуздывать };