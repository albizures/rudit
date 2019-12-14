import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстреливать: PerfectVerb = {
  name: Word('отстреливать', 5),
  singular1stPerson: Word('отстреливаю', 5),
  singular2ndPerson: Word('отстреливаешь', 5),
  singular3rdPerson: Word('отстреливает', 5),
  plural1stPerson: Word('отстреливаем', 5),
  plural2ndPerson: Word('отстреливаете', 5),
  plural3rdPerson: Word('отстреливают', 5),
  masculinePast: Word('отстреливал', 5),
  femininePast: Word('отстреливала', 5),
  neuterPast: Word('отстреливало', 5),
  pluralPast: Word('отстреливали', 5),
  imperativeInformal: Word('отстреливай', 5),
  imperativeFormal: Word('отстреливайте', 5),
  imperfect: [],
};

perfectVerbs.set(отстреливать.name.text, отстреливать);

export { отстреливать };