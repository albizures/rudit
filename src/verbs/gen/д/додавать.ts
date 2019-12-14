import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const додавать: PerfectVerb = {
  name: Word('додавать', 5),
  singular1stPerson: Word('додаю', 4),
  singular2ndPerson: Word('додаёшь', 4),
  singular3rdPerson: Word('додаёт', 4),
  plural1stPerson: Word('додаём', 4),
  plural2ndPerson: Word('додаёте', 4),
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