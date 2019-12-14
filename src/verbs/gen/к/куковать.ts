import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const куковать: PerfectVerb = {
  name: Word('куковать', 5),
  singular1stPerson: Word('кукую', 3),
  singular2ndPerson: Word('кукуешь', 3),
  singular3rdPerson: Word('кукует', 3),
  plural1stPerson: Word('кукуем', 3),
  plural2ndPerson: Word('кукуете', 3),
  plural3rdPerson: Word('кукуют', 3),
  masculinePast: Word('куковал', 5),
  femininePast: Word('куковала', 5),
  neuterPast: Word('куковало', 5),
  pluralPast: Word('куковали', 5),
  imperativeInformal: Word('кукуй', 3),
  imperativeFormal: Word('кукуйте', 3),
  imperfect: [],
};

perfectVerbs.set(куковать.name.text, куковать);

export { куковать };