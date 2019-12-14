import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разрезать: PerfectVerb = {
  name: Word('разрезать', 4),
  singular1stPerson: Word('разрежу', 4),
  singular2ndPerson: Word('разрежешь', 4),
  singular3rdPerson: Word('разрежет', 4),
  plural1stPerson: Word('разрежем', 4),
  plural2ndPerson: Word('разрежете', 4),
  plural3rdPerson: Word('разрежут', 4),
  masculinePast: Word('разрезал', 4),
  femininePast: Word('разрезала', 4),
  neuterPast: Word('разрезало', 4),
  pluralPast: Word('разрезали', 4),
  imperativeInformal: Word('разрежь', 4),
  imperativeFormal: Word('разрежьте', 4),
  imperfect: [],
};

perfectVerbs.set(разрезать.name.text, разрезать);

export { разрезать };