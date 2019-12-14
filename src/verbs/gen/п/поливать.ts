import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поливать: PerfectVerb = {
  name: Word('поливать', 5),
  singular1stPerson: Word('поливаю', 5),
  singular2ndPerson: Word('поливаешь', 5),
  singular3rdPerson: Word('поливает', 5),
  plural1stPerson: Word('поливаем', 5),
  plural2ndPerson: Word('поливаете', 5),
  plural3rdPerson: Word('поливают', 5),
  masculinePast: Word('поливал', 5),
  femininePast: Word('поливала', 5),
  neuterPast: Word('поливало', 5),
  pluralPast: Word('поливали', 5),
  imperativeInformal: Word('поливай', 5),
  imperativeFormal: Word('поливайте', 5),
  imperfect: [],
};

perfectVerbs.set(поливать.name.text, поливать);

export { поливать };