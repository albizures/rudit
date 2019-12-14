import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поскуливать: PerfectVerb = {
  name: Word('поскуливать', 4),
  singular1stPerson: Word('поскуливаю', 4),
  singular2ndPerson: Word('поскуливаешь', 4),
  singular3rdPerson: Word('поскуливает', 4),
  plural1stPerson: Word('поскуливаем', 4),
  plural2ndPerson: Word('поскуливаете', 4),
  plural3rdPerson: Word('поскуливают', 4),
  masculinePast: Word('поскуливал', 4),
  femininePast: Word('поскуливала', 4),
  neuterPast: Word('поскуливало', 4),
  pluralPast: Word('поскуливали', 4),
  imperativeInformal: Word('поскуливай', 4),
  imperativeFormal: Word('поскуливайте', 4),
  imperfect: [],
};

perfectVerbs.set(поскуливать.name.text, поскуливать);

export { поскуливать };