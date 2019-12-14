import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const затосковать: PerfectVerb = {
  name: Word('затосковать', 8),
  singular1stPerson: Word('затоскую', 6),
  singular2ndPerson: Word('затоскуешь', 6),
  singular3rdPerson: Word('затоскует', 6),
  plural1stPerson: Word('затоскуем', 6),
  plural2ndPerson: Word('затоскуете', 6),
  plural3rdPerson: Word('затоскуют', 6),
  masculinePast: Word('затосковал', 8),
  femininePast: Word('затосковала', 8),
  neuterPast: Word('затосковало', 8),
  pluralPast: Word('затосковали', 8),
  imperativeInformal: Word('затоскуй', 6),
  imperativeFormal: Word('затоскуйте', 6),
  imperfect: [],
};

perfectVerbs.set(затосковать.name.text, затосковать);

export { затосковать };