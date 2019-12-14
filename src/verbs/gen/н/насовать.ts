import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const насовать: PerfectVerb = {
  name: Word('насовать', 5),
  singular1stPerson: Word('насую', 4),
  singular2ndPerson: Word('насуёшь', 1),
  singular3rdPerson: Word('насуёт', 1),
  plural1stPerson: Word('насуём', 1),
  plural2ndPerson: Word('насуёте', 1),
  plural3rdPerson: Word('насуют', 4),
  masculinePast: Word('насовал', 5),
  femininePast: Word('насовала', 5),
  neuterPast: Word('насовало', 5),
  pluralPast: Word('насовали', 5),
  imperativeInformal: Word('насуй', 3),
  imperativeFormal: Word('насуйте', 3),
  imperfect: [],
};

perfectVerbs.set(насовать.name.text, насовать);

export { насовать };