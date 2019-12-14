import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обдавать: PerfectVerb = {
  name: Word('обдавать', 5),
  singular1stPerson: Word('обдаю', 4),
  singular2ndPerson: Word('обдаёшь', 4),
  singular3rdPerson: Word('обдаёт', 4),
  plural1stPerson: Word('обдаём', 4),
  plural2ndPerson: Word('обдаёте', 4),
  plural3rdPerson: Word('обдают', 4),
  masculinePast: Word('обдавал', 5),
  femininePast: Word('обдавала', 5),
  neuterPast: Word('обдавало', 5),
  pluralPast: Word('обдавали', 5),
  imperativeInformal: Word('обдавай', 5),
  imperativeFormal: Word('обдавайте', 5),
  imperfect: [],
};

perfectVerbs.set(обдавать.name.text, обдавать);

export { обдавать };