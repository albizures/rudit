import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поддавать: PerfectVerb = {
  name: Word('поддавать', 6),
  singular1stPerson: Word('поддаю', 5),
  singular2ndPerson: Word('поддаёшь', 4),
  singular3rdPerson: Word('поддаёт', 4),
  plural1stPerson: Word('поддаём', 4),
  plural2ndPerson: Word('поддаёте', 4),
  plural3rdPerson: Word('поддают', 5),
  masculinePast: Word('поддавал', 6),
  femininePast: Word('поддавала', 6),
  neuterPast: Word('поддавало', 6),
  pluralPast: Word('поддавали', 6),
  imperativeInformal: Word('поддавай', 6),
  imperativeFormal: Word('поддавайте', 6),
  imperfect: [],
};

perfectVerbs.set(поддавать.name.text, поддавать);

export { поддавать };