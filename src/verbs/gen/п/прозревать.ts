import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прозревать: PerfectVerb = {
  name: Word('прозревать', 7),
  singular1stPerson: Word('прозреваю', 7),
  singular2ndPerson: Word('прозреваешь', 7),
  singular3rdPerson: Word('прозревает', 7),
  plural1stPerson: Word('прозреваем', 7),
  plural2ndPerson: Word('прозреваете', 7),
  plural3rdPerson: Word('прозревают', 7),
  masculinePast: Word('прозревал', 7),
  femininePast: Word('прозревала', 7),
  neuterPast: Word('прозревало', 7),
  pluralPast: Word('прозревали', 7),
  imperativeInformal: Word('прозревай', 7),
  imperativeFormal: Word('прозревайте', 7),
  imperfect: [],
};

perfectVerbs.set(прозревать.name.text, прозревать);

export { прозревать };