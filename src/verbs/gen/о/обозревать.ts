import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обозревать: PerfectVerb = {
  name: Word('обозревать', 7),
  singular1stPerson: Word('обозреваю', 7),
  singular2ndPerson: Word('обозреваешь', 7),
  singular3rdPerson: Word('обозревает', 7),
  plural1stPerson: Word('обозреваем', 7),
  plural2ndPerson: Word('обозреваете', 7),
  plural3rdPerson: Word('обозревают', 7),
  masculinePast: Word('обозревал', 7),
  femininePast: Word('обозревала', 7),
  neuterPast: Word('обозревало', 7),
  pluralPast: Word('обозревали', 7),
  imperativeInformal: Word('обозревай', 7),
  imperativeFormal: Word('обозревайте', 7),
  imperfect: [],
};

perfectVerbs.set(обозревать.name.text, обозревать);

export { обозревать };