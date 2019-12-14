import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const паниковать: PerfectVerb = {
  name: Word('паниковать', 7),
  singular1stPerson: Word('паникую', 5),
  singular2ndPerson: Word('паникуешь', 5),
  singular3rdPerson: Word('паникует', 5),
  plural1stPerson: Word('паникуем', 5),
  plural2ndPerson: Word('паникуете', 5),
  plural3rdPerson: Word('паникуют', 5),
  masculinePast: Word('паниковал', 7),
  femininePast: Word('паниковала', 7),
  neuterPast: Word('паниковало', 7),
  pluralPast: Word('паниковали', 7),
  imperativeInformal: Word('паникуй', 5),
  imperativeFormal: Word('паникуйте', 5),
  imperfect: [],
};

perfectVerbs.set(паниковать.name.text, паниковать);

export { паниковать };