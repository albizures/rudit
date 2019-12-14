import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зачаливать: PerfectVerb = {
  name: Word('зачаливать', 3),
  singular1stPerson: Word('зачаливаю', 3),
  singular2ndPerson: Word('зачаливаешь', 3),
  singular3rdPerson: Word('зачаливает', 3),
  plural1stPerson: Word('зачаливаем', 3),
  plural2ndPerson: Word('зачаливаете', 3),
  plural3rdPerson: Word('зачаливают', 3),
  masculinePast: Word('зачаливал', 3),
  femininePast: Word('зачаливала', 3),
  neuterPast: Word('зачаливало', 3),
  pluralPast: Word('зачаливали', 3),
  imperativeInformal: Word('зачаливай', 3),
  imperativeFormal: Word('зачаливайте', 3),
  imperfect: [],
};

perfectVerbs.set(зачаливать.name.text, зачаливать);

export { зачаливать };