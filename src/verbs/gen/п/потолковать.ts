import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потолковать: PerfectVerb = {
  name: Word('потолковать', 8),
  singular1stPerson: Word('потолкую', 6),
  singular2ndPerson: Word('потолкуешь', 6),
  singular3rdPerson: Word('потолкует', 6),
  plural1stPerson: Word('потолкуем', 6),
  plural2ndPerson: Word('потолкуете', 6),
  plural3rdPerson: Word('потолкуют', 6),
  masculinePast: Word('потолковал', 8),
  femininePast: Word('потолковала', 8),
  neuterPast: Word('потолковало', 8),
  pluralPast: Word('потолковали', 8),
  imperativeInformal: Word('потолкуй', 6),
  imperativeFormal: Word('потолкуйте', 6),
  imperfect: [],
};

perfectVerbs.set(потолковать.name.text, потолковать);

export { потолковать };