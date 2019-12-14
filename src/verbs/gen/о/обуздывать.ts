import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обуздывать: PerfectVerb = {
  name: Word('обуздывать', 2),
  singular1stPerson: Word('обуздываю', 2),
  singular2ndPerson: Word('обуздываешь', 2),
  singular3rdPerson: Word('обуздывает', 2),
  plural1stPerson: Word('обуздываем', 2),
  plural2ndPerson: Word('обуздываете', 2),
  plural3rdPerson: Word('обуздывают', 2),
  masculinePast: Word('обуздывал', 2),
  femininePast: Word('обуздывала', 2),
  neuterPast: Word('обуздывало', 2),
  pluralPast: Word('обуздывали', 2),
  imperativeInformal: Word('обуздывай', 2),
  imperativeFormal: Word('обуздывайте', 2),
  imperfect: [],
};

perfectVerbs.set(обуздывать.name.text, обуздывать);

export { обуздывать };