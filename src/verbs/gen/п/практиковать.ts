import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const практиковать: PerfectVerb = {
  name: Word('практиковать', 9),
  singular1stPerson: Word('практикую', 7),
  singular2ndPerson: Word('практикуешь', 7),
  singular3rdPerson: Word('практикует', 7),
  plural1stPerson: Word('практикуем', 7),
  plural2ndPerson: Word('практикуете', 7),
  plural3rdPerson: Word('практикуют', 7),
  masculinePast: Word('практиковал', 9),
  femininePast: Word('практиковала', 9),
  neuterPast: Word('практиковало', 9),
  pluralPast: Word('практиковали', 9),
  imperativeInformal: Word('практикуй', 7),
  imperativeFormal: Word('практикуйте', 7),
  imperfect: [],
};

perfectVerbs.set(практиковать.name.text, практиковать);

export { практиковать };