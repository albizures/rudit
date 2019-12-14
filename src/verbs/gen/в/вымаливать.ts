import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вымаливать: PerfectVerb = {
  name: Word('вымаливать', 3),
  singular1stPerson: Word('вымаливаю', 3),
  singular2ndPerson: Word('вымаливаешь', 3),
  singular3rdPerson: Word('вымаливает', 3),
  plural1stPerson: Word('вымаливаем', 3),
  plural2ndPerson: Word('вымаливаете', 3),
  plural3rdPerson: Word('вымаливают', 3),
  masculinePast: Word('вымаливал', 3),
  femininePast: Word('вымаливала', 3),
  neuterPast: Word('вымаливало', 3),
  pluralPast: Word('вымаливали', 3),
  imperativeInformal: Word('вымаливай', 3),
  imperativeFormal: Word('вымаливайте', 3),
  imperfect: [],
};

perfectVerbs.set(вымаливать.name.text, вымаливать);

export { вымаливать };