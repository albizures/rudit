import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запаздывать: PerfectVerb = {
  name: Word('запаздывать', 3),
  singular1stPerson: Word('запаздываю', 3),
  singular2ndPerson: Word('запаздываешь', 3),
  singular3rdPerson: Word('запаздывает', 3),
  plural1stPerson: Word('запаздываем', 3),
  plural2ndPerson: Word('запаздываете', 3),
  plural3rdPerson: Word('запаздывают', 3),
  masculinePast: Word('запаздывал', 3),
  femininePast: Word('запаздывала', 3),
  neuterPast: Word('запаздывало', 3),
  pluralPast: Word('запаздывали', 3),
  imperativeInformal: Word('запаздывай', 3),
  imperativeFormal: Word('запаздывайте', 3),
  imperfect: [],
};

perfectVerbs.set(запаздывать.name.text, запаздывать);

export { запаздывать };