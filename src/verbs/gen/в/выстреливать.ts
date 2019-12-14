import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выстреливать: PerfectVerb = {
  name: Word('выстреливать', 5),
  singular1stPerson: Word('выстреливаю', 5),
  singular2ndPerson: Word('выстреливаешь', 5),
  singular3rdPerson: Word('выстреливает', 5),
  plural1stPerson: Word('выстреливаем', 5),
  plural2ndPerson: Word('выстреливаете', 5),
  plural3rdPerson: Word('выстреливают', 5),
  masculinePast: Word('выстреливал', 5),
  femininePast: Word('выстреливала', 5),
  neuterPast: Word('выстреливало', 5),
  pluralPast: Word('выстреливали', 5),
  imperativeInformal: Word('выстреливай', 5),
  imperativeFormal: Word('выстреливайте', 5),
  imperfect: [],
};

perfectVerbs.set(выстреливать.name.text, выстреливать);

export { выстреливать };