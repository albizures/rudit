import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обуревать: PerfectVerb = {
  name: Word('обуревать', 6),
  singular1stPerson: Word('обуреваю', 6),
  singular2ndPerson: Word('обуреваешь', 6),
  singular3rdPerson: Word('обуревает', 6),
  plural1stPerson: Word('обуреваем', 6),
  plural2ndPerson: Word('обуреваете', 6),
  plural3rdPerson: Word('обуревают', 6),
  masculinePast: Word('обуревал', 6),
  femininePast: Word('обуревала', 6),
  neuterPast: Word('обуревало', 6),
  pluralPast: Word('обуревали', 6),
  imperativeInformal: Word('обуревай', 6),
  imperativeFormal: Word('обуревайте', 6),
  imperfect: [],
};

perfectVerbs.set(обуревать.name.text, обуревать);

export { обуревать };