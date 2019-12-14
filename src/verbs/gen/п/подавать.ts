import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подавать: PerfectVerb = {
  name: Word('подавать', 5),
  singular1stPerson: Word('подаю', 4),
  singular2ndPerson: Word('подаёшь', 4),
  singular3rdPerson: Word('подаёт', 4),
  plural1stPerson: Word('подаём', 4),
  plural2ndPerson: Word('подаёте', 4),
  plural3rdPerson: Word('подают', 4),
  masculinePast: Word('подавал', 5),
  femininePast: Word('подавала', 5),
  neuterPast: Word('подавало', 5),
  pluralPast: Word('подавали', 5),
  imperativeInformal: Word('подавай', 5),
  imperativeFormal: Word('подавайте', 5),
  imperfect: ['подать'],
};

perfectVerbs.set(подавать.name.text, подавать);

export { подавать };