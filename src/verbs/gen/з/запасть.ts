import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запасть: PerfectVerb = {
  name: Word('запасть', 3),
  singular1stPerson: Word('западу', 5),
  singular2ndPerson: Word('западёшь', 1),
  singular3rdPerson: Word('западёт', 1),
  plural1stPerson: Word('западём', 1),
  plural2ndPerson: Word('западёте', 1),
  plural3rdPerson: Word('западут', 5),
  masculinePast: Word('запал', 3),
  femininePast: Word('запала', 3),
  neuterPast: Word('запало', 3),
  pluralPast: Word('запали', 3),
  imperativeInformal: Word('запади', 5),
  imperativeFormal: Word('западите', 5),
  imperfect: [],
};

perfectVerbs.set(запасть.name.text, запасть);

export { запасть };