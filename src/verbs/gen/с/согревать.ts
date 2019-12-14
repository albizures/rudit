import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const согревать: PerfectVerb = {
  name: Word('согревать', 6),
  singular1stPerson: Word('согреваю', 6),
  singular2ndPerson: Word('согреваешь', 6),
  singular3rdPerson: Word('согревает', 6),
  plural1stPerson: Word('согреваем', 6),
  plural2ndPerson: Word('согреваете', 6),
  plural3rdPerson: Word('согревают', 6),
  masculinePast: Word('согревал', 6),
  femininePast: Word('согревала', 6),
  neuterPast: Word('согревало', 6),
  pluralPast: Word('согревали', 6),
  imperativeInformal: Word('согревай', 6),
  imperativeFormal: Word('согревайте', 6),
  imperfect: [],
};

perfectVerbs.set(согревать.name.text, согревать);

export { согревать };