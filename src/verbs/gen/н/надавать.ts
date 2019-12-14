import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надавать: PerfectVerb = {
  name: Word('надавать', 5),
  singular1stPerson: Word('надаю', 4),
  singular2ndPerson: Word('надаёшь', 1),
  singular3rdPerson: Word('надаёт', 1),
  plural1stPerson: Word('надаём', 1),
  plural2ndPerson: Word('надаёте', 1),
  plural3rdPerson: Word('надают', 4),
  masculinePast: Word('надавал', 5),
  femininePast: Word('надавала', 5),
  neuterPast: Word('надавало', 5),
  pluralPast: Word('надавали', 5),
  imperativeInformal: Word('надавай', 5),
  imperativeFormal: Word('надавайте', 5),
  imperfect: [],
};

perfectVerbs.set(надавать.name.text, надавать);

export { надавать };