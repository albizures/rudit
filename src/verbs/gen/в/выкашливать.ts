import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкашливать: PerfectVerb = {
  name: Word('выкашливать', 3),
  singular1stPerson: Word('выкашливаю', 3),
  singular2ndPerson: Word('выкашливаешь', 3),
  singular3rdPerson: Word('выкашливает', 3),
  plural1stPerson: Word('выкашливаем', 3),
  plural2ndPerson: Word('выкашливаете', 3),
  plural3rdPerson: Word('выкашливают', 3),
  masculinePast: Word('выкашливал', 3),
  femininePast: Word('выкашливала', 3),
  neuterPast: Word('выкашливало', 3),
  pluralPast: Word('выкашливали', 3),
  imperativeInformal: Word('выкашливай', 3),
  imperativeFormal: Word('выкашливайте', 3),
  imperfect: [],
};

perfectVerbs.set(выкашливать.name.text, выкашливать);

export { выкашливать };