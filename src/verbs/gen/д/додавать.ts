import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const додавать: PerfectVerb = {
  name: Word('додавать', 5),
  singular1stPerson: Word('додаю', 4),
  singular2ndPerson: Word('додаёшь', 3),
  singular3rdPerson: Word('додаёт', 3),
  plural1stPerson: Word('додаём', 3),
  plural2ndPerson: Word('додаёте', 3),
  plural3rdPerson: Word('додают', 4),
  masculinePast: Word('додавал', 5),
  femininePast: Word('додавала', 5),
  neuterPast: Word('додавало', 5),
  pluralPast: Word('додавали', 5),
  imperativeInformal: Word('додавай', 5),
  imperativeFormal: Word('додавайте', 5),
  imperfect: [],
};

perfectVerbs.set(додавать.name.text, додавать);

export { додавать };