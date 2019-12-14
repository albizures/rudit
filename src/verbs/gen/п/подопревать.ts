import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подопревать: PerfectVerb = {
  name: Word('подопревать', 8),
  singular1stPerson: Word('подопреваю', 8),
  singular2ndPerson: Word('подопреваешь', 8),
  singular3rdPerson: Word('подопревает', 8),
  plural1stPerson: Word('подопреваем', 8),
  plural2ndPerson: Word('подопреваете', 8),
  plural3rdPerson: Word('подопревают', 8),
  masculinePast: Word('подопревал', 8),
  femininePast: Word('подопревала', 8),
  neuterPast: Word('подопревало', 8),
  pluralPast: Word('подопревали', 8),
  imperativeInformal: Word('подопревай', 8),
  imperativeFormal: Word('подопревайте', 8),
  imperfect: [],
};

perfectVerbs.set(подопревать.name.text, подопревать);

export { подопревать };