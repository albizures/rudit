import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вливать: PerfectVerb = {
  name: Word('вливать', 4),
  singular1stPerson: Word('вливаю', 4),
  singular2ndPerson: Word('вливаешь', 4),
  singular3rdPerson: Word('вливает', 4),
  plural1stPerson: Word('вливаем', 4),
  plural2ndPerson: Word('вливаете', 4),
  plural3rdPerson: Word('вливают', 4),
  masculinePast: Word('вливал', 4),
  femininePast: Word('вливала', 4),
  neuterPast: Word('вливало', 4),
  pluralPast: Word('вливали', 4),
  imperativeInformal: Word('вливай', 4),
  imperativeFormal: Word('вливайте', 4),
  imperfect: [],
};

perfectVerbs.set(вливать.name.text, вливать);

export { вливать };