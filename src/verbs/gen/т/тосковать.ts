import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тосковать: PerfectVerb = {
  name: Word('тосковать', 6),
  singular1stPerson: Word('тоскую', 4),
  singular2ndPerson: Word('тоскуешь', 4),
  singular3rdPerson: Word('тоскует', 4),
  plural1stPerson: Word('тоскуем', 4),
  plural2ndPerson: Word('тоскуете', 4),
  plural3rdPerson: Word('тоскуют', 4),
  masculinePast: Word('тосковал', 6),
  femininePast: Word('тосковала', 6),
  neuterPast: Word('тосковало', 6),
  pluralPast: Word('тосковали', 6),
  imperativeInformal: Word('тоскуй', 4),
  imperativeFormal: Word('тоскуйте', 4),
  imperfect: [],
};

perfectVerbs.set(тосковать.name.text, тосковать);

export { тосковать };