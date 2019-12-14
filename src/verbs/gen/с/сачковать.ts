import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сачковать: PerfectVerb = {
  name: Word('сачковать', 6),
  singular1stPerson: Word('сачкую', 4),
  singular2ndPerson: Word('сачкуешь', 4),
  singular3rdPerson: Word('сачкует', 4),
  plural1stPerson: Word('сачкуем', 4),
  plural2ndPerson: Word('сачкуете', 4),
  plural3rdPerson: Word('сачкуют', 4),
  masculinePast: Word('сачковал', 6),
  femininePast: Word('сачковала', 6),
  neuterPast: Word('сачковало', 6),
  pluralPast: Word('сачковали', 6),
  imperativeInformal: Word('сачкуй', 4),
  imperativeFormal: Word('сачкуйте', 4),
  imperfect: [],
};

perfectVerbs.set(сачковать.name.text, сачковать);

export { сачковать };