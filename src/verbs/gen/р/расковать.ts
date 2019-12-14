import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расковать: PerfectVerb = {
  name: Word('расковать', 6),
  singular1stPerson: Word('раскую', 5),
  singular2ndPerson: Word('раскуёшь', 5),
  singular3rdPerson: Word('раскуёт', 5),
  plural1stPerson: Word('раскуём', 5),
  plural2ndPerson: Word('раскуёте', 5),
  plural3rdPerson: Word('раскуют', 5),
  masculinePast: Word('расковал', 6),
  femininePast: Word('расковала', 6),
  neuterPast: Word('расковало', 6),
  pluralPast: Word('расковали', 6),
  imperativeInformal: Word('раскуй', 4),
  imperativeFormal: Word('раскуйте', 4),
  imperfect: [],
};

perfectVerbs.set(расковать.name.text, расковать);

export { расковать };