import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поткать: PerfectVerb = {
  name: Word('поткать', 4),
  singular1stPerson: Word('потку', 4),
  singular2ndPerson: Word('поткёшь', 1),
  singular3rdPerson: Word('поткёт', 1),
  plural1stPerson: Word('поткём', 1),
  plural2ndPerson: Word('поткёте', 6),
  plural3rdPerson: Word('поткут', 4),
  masculinePast: Word('поткал', 4),
  femininePast: Word('поткала', 6),
  neuterPast: Word('поткало', 4),
  pluralPast: Word('поткали', 4),
  imperativeInformal: Word('потки', 4),
  imperativeFormal: Word('потките', 4),
  imperfect: [],
};

perfectVerbs.set(поткать.name.text, поткать);

export { поткать };