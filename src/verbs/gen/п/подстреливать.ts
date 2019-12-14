import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подстреливать: PerfectVerb = {
  name: Word('подстреливать', 6),
  singular1stPerson: Word('подстреливаю', 6),
  singular2ndPerson: Word('подстреливаешь', 6),
  singular3rdPerson: Word('подстреливает', 6),
  plural1stPerson: Word('подстреливаем', 6),
  plural2ndPerson: Word('подстреливаете', 6),
  plural3rdPerson: Word('подстреливают', 6),
  masculinePast: Word('подстреливал', 6),
  femininePast: Word('подстреливала', 6),
  neuterPast: Word('подстреливало', 6),
  pluralPast: Word('подстреливали', 6),
  imperativeInformal: Word('подстреливай', 6),
  imperativeFormal: Word('подстреливайте', 6),
  imperfect: [],
};

perfectVerbs.set(подстреливать.name.text, подстреливать);

export { подстреливать };