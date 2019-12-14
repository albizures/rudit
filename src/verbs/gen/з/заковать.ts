import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заковать: PerfectVerb = {
  name: Word('заковать', 5),
  singular1stPerson: Word('закую', 4),
  singular2ndPerson: Word('закуёшь', 1),
  singular3rdPerson: Word('закуёт', 1),
  plural1stPerson: Word('закуём', 1),
  plural2ndPerson: Word('закуёте', 1),
  plural3rdPerson: Word('закуют', 4),
  masculinePast: Word('заковал', 5),
  femininePast: Word('заковала', 5),
  neuterPast: Word('заковало', 5),
  pluralPast: Word('заковали', 5),
  imperativeInformal: Word('закуй', 3),
  imperativeFormal: Word('закуйте', 3),
  imperfect: [],
};

perfectVerbs.set(заковать.name.text, заковать);

export { заковать };