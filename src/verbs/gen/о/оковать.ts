import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оковать: PerfectVerb = {
  name: Word('оковать', 4),
  singular1stPerson: Word('окую', 3),
  singular2ndPerson: Word('окуёшь', 3),
  singular3rdPerson: Word('окуёт', 3),
  plural1stPerson: Word('окуём', 3),
  plural2ndPerson: Word('окуёте', 3),
  plural3rdPerson: Word('окуют', 3),
  masculinePast: Word('оковал', 4),
  femininePast: Word('оковала', 4),
  neuterPast: Word('оковало', 4),
  pluralPast: Word('оковали', 4),
  imperativeInformal: Word('окуй', 2),
  imperativeFormal: Word('окуйте', 2),
  imperfect: [],
};

perfectVerbs.set(оковать.name.text, оковать);

export { оковать };