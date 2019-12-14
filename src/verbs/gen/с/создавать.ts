import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const создавать: PerfectVerb = {
  name: Word('создавать', 6),
  singular1stPerson: Word('создаю', 5),
  singular2ndPerson: Word('создаёшь', 5),
  singular3rdPerson: Word('создаёт', 5),
  plural1stPerson: Word('создаём', 5),
  plural2ndPerson: Word('создаёте', 5),
  plural3rdPerson: Word('создают', 5),
  masculinePast: Word('создавал', 6),
  femininePast: Word('создавала', 6),
  neuterPast: Word('создавало', 6),
  pluralPast: Word('создавали', 6),
  imperativeInformal: Word('создавай', 6),
  imperativeFormal: Word('создавайте', 6),
  imperfect: ['создать'],
};

perfectVerbs.set(создавать.name.text, создавать);

export { создавать };