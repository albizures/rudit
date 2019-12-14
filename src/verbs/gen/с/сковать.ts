import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сковать: PerfectVerb = {
  name: Word('сковать', 4),
  singular1stPerson: Word('скую', 3),
  singular2ndPerson: Word('скуёшь', 3),
  singular3rdPerson: Word('скуёт', 3),
  plural1stPerson: Word('скуём', 3),
  plural2ndPerson: Word('скуёте', 3),
  plural3rdPerson: Word('скуют', 3),
  masculinePast: Word('сковал', 4),
  femininePast: Word('сковала', 4),
  neuterPast: Word('сковало', 4),
  pluralPast: Word('сковали', 4),
  imperativeInformal: Word('скуй', 2),
  imperativeFormal: Word('скуйте', 2),
  imperfect: [],
};

perfectVerbs.set(сковать.name.text, сковать);

export { сковать };