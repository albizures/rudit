import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздавливать: PerfectVerb = {
  name: Word('раздавливать', 4),
  singular1stPerson: Word('раздавливаю', 4),
  singular2ndPerson: Word('раздавливаешь', 4),
  singular3rdPerson: Word('раздавливает', 4),
  plural1stPerson: Word('раздавливаем', 4),
  plural2ndPerson: Word('раздавливаете', 4),
  plural3rdPerson: Word('раздавливают', 4),
  masculinePast: Word('раздавливал', 4),
  femininePast: Word('раздавливала', 4),
  neuterPast: Word('раздавливало', 4),
  pluralPast: Word('раздавливали', 4),
  imperativeInformal: Word('раздавливай', 4),
  imperativeFormal: Word('раздавливайте', 4),
  imperfect: [],
};

perfectVerbs.set(раздавливать.name.text, раздавливать);

export { раздавливать };