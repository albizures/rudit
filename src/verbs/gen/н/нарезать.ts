import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нарезать: PerfectVerb = {
  name: Word('нарезать', 3),
  singular1stPerson: Word('нарежу', 3),
  singular2ndPerson: Word('нарежешь', 3),
  singular3rdPerson: Word('нарежет', 3),
  plural1stPerson: Word('нарежем', 3),
  plural2ndPerson: Word('нарежете', 3),
  plural3rdPerson: Word('нарежут', 3),
  masculinePast: Word('нарезал', 3),
  femininePast: Word('нарезала', 3),
  neuterPast: Word('нарезало', 3),
  pluralPast: Word('нарезали', 3),
  imperativeInformal: Word('нарежь', 3),
  imperativeFormal: Word('нарежьте', 3),
  imperfect: [],
};

perfectVerbs.set(нарезать.name.text, нарезать);

export { нарезать };