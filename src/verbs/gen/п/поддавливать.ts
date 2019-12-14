import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поддавливать: PerfectVerb = {
  name: Word('поддавливать', 4),
  singular1stPerson: Word('поддавливаю', 4),
  singular2ndPerson: Word('поддавливаешь', 4),
  singular3rdPerson: Word('поддавливает', 4),
  plural1stPerson: Word('поддавливаем', 4),
  plural2ndPerson: Word('поддавливаете', 4),
  plural3rdPerson: Word('поддавливают', 4),
  masculinePast: Word('поддавливал', 4),
  femininePast: Word('поддавливала', 4),
  neuterPast: Word('поддавливало', 4),
  pluralPast: Word('поддавливали', 4),
  imperativeInformal: Word('поддавливай', 4),
  imperativeFormal: Word('поддавливайте', 4),
  imperfect: [],
};

perfectVerbs.set(поддавливать.name.text, поддавливать);

export { поддавливать };