import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приковать: PerfectVerb = {
  name: Word('приковать', 6),
  singular1stPerson: Word('прикую', 5),
  singular2ndPerson: Word('прикуёшь', 5),
  singular3rdPerson: Word('прикуёт', 5),
  plural1stPerson: Word('прикуём', 5),
  plural2ndPerson: Word('прикуёте', 5),
  plural3rdPerson: Word('прикуют', 5),
  masculinePast: Word('приковал', 6),
  femininePast: Word('приковала', 6),
  neuterPast: Word('приковало', 6),
  pluralPast: Word('приковали', 6),
  imperativeInformal: Word('прикуй', 4),
  imperativeFormal: Word('прикуйте', 4),
  imperfect: [],
};

perfectVerbs.set(приковать.name.text, приковать);

export { приковать };