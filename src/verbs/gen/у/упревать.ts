import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упревать: PerfectVerb = {
  name: Word('упревать', 5),
  singular1stPerson: Word('упреваю', 5),
  singular2ndPerson: Word('упреваешь', 5),
  singular3rdPerson: Word('упревает', 5),
  plural1stPerson: Word('упреваем', 5),
  plural2ndPerson: Word('упреваете', 5),
  plural3rdPerson: Word('упревают', 5),
  masculinePast: Word('упревал', 5),
  femininePast: Word('упревала', 5),
  neuterPast: Word('упревало', 5),
  pluralPast: Word('упревали', 5),
  imperativeInformal: Word('упревай', 5),
  imperativeFormal: Word('упревайте', 5),
  imperfect: [],
};

perfectVerbs.set(упревать.name.text, упревать);

export { упревать };