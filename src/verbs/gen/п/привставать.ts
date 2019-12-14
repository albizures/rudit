import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const привставать: PerfectVerb = {
  name: Word('привставать', 8),
  singular1stPerson: Word('привстаю', 7),
  singular2ndPerson: Word('привстаёшь', 6),
  singular3rdPerson: Word('привстаёт', 6),
  plural1stPerson: Word('привстаём', 6),
  plural2ndPerson: Word('привстаёте', 6),
  plural3rdPerson: Word('привстают', 7),
  masculinePast: Word('привставал', 8),
  femininePast: Word('привставала', 8),
  neuterPast: Word('привставало', 8),
  pluralPast: Word('привставали', 8),
  imperativeInformal: Word('привставай', 8),
  imperativeFormal: Word('привставайте', 8),
  imperfect: [],
};

perfectVerbs.set(привставать.name.text, привставать);

export { привставать };