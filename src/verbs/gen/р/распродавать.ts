import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распродавать: PerfectVerb = {
  name: Word('распродавать', 9),
  singular1stPerson: Word('распродаю', 8),
  singular2ndPerson: Word('распродаёшь', 1),
  singular3rdPerson: Word('распродаёт', 1),
  plural1stPerson: Word('распродаём', 1),
  plural2ndPerson: Word('распродаёте', 1),
  plural3rdPerson: Word('распродают', 8),
  masculinePast: Word('распродавал', 9),
  femininePast: Word('распродавала', 9),
  neuterPast: Word('распродавало', 9),
  pluralPast: Word('распродавали', 9),
  imperativeInformal: Word('распродавай', 9),
  imperativeFormal: Word('распродавайте', 9),
  imperfect: [],
};

perfectVerbs.set(распродавать.name.text, распродавать);

export { распродавать };