import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздавать: PerfectVerb = {
  name: Word('раздавать', 6),
  singular1stPerson: Word('раздаю', 5),
  singular2ndPerson: Word('раздаёшь', 5),
  singular3rdPerson: Word('раздаёт', 5),
  plural1stPerson: Word('раздаём', 5),
  plural2ndPerson: Word('раздаёте', 5),
  plural3rdPerson: Word('раздают', 5),
  masculinePast: Word('раздавал', 6),
  femininePast: Word('раздавала', 6),
  neuterPast: Word('раздавало', 6),
  pluralPast: Word('раздавали', 6),
  imperativeInformal: Word('раздавай', 6),
  imperativeFormal: Word('раздавайте', 6),
  imperfect: ['раздать'],
};

perfectVerbs.set(раздавать.name.text, раздавать);

export { раздавать };