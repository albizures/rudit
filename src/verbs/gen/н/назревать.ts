import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const назревать: PerfectVerb = {
  name: Word('назревать', 6),
  singular1stPerson: Word('назреваю', 6),
  singular2ndPerson: Word('назреваешь', 6),
  singular3rdPerson: Word('назревает', 6),
  plural1stPerson: Word('назреваем', 6),
  plural2ndPerson: Word('назреваете', 6),
  plural3rdPerson: Word('назревают', 6),
  masculinePast: Word('назревал', 6),
  femininePast: Word('назревала', 6),
  neuterPast: Word('назревало', 6),
  pluralPast: Word('назревали', 6),
  imperativeInformal: Word('назревай', 6),
  imperativeFormal: Word('назревайте', 6),
  imperfect: [],
};

perfectVerbs.set(назревать.name.text, назревать);

export { назревать };