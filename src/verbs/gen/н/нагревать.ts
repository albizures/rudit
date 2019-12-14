import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нагревать: PerfectVerb = {
  name: Word('нагревать', 6),
  singular1stPerson: Word('нагреваю', 6),
  singular2ndPerson: Word('нагреваешь', 6),
  singular3rdPerson: Word('нагревает', 6),
  plural1stPerson: Word('нагреваем', 6),
  plural2ndPerson: Word('нагреваете', 6),
  plural3rdPerson: Word('нагревают', 6),
  masculinePast: Word('нагревал', 6),
  femininePast: Word('нагревала', 6),
  neuterPast: Word('нагревало', 6),
  pluralPast: Word('нагревали', 6),
  imperativeInformal: Word('нагревай', 6),
  imperativeFormal: Word('нагревайте', 6),
  imperfect: [],
};

perfectVerbs.set(нагревать.name.text, нагревать);

export { нагревать };