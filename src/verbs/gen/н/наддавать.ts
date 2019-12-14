import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наддавать: PerfectVerb = {
  name: Word('наддавать', 6),
  singular1stPerson: Word('наддаю', 5),
  singular2ndPerson: Word('наддаёшь', 1),
  singular3rdPerson: Word('наддаёт', 1),
  plural1stPerson: Word('наддаём', 1),
  plural2ndPerson: Word('наддаёте', 1),
  plural3rdPerson: Word('наддают', 5),
  masculinePast: Word('наддавал', 6),
  femininePast: Word('наддавала', 6),
  neuterPast: Word('наддавало', 6),
  pluralPast: Word('наддавали', 6),
  imperativeInformal: Word('наддавай', 6),
  imperativeFormal: Word('наддавайте', 6),
  imperfect: [],
};

perfectVerbs.set(наддавать.name.text, наддавать);

export { наддавать };