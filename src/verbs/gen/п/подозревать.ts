import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подозревать: PerfectVerb = {
  name: Word('подозревать', 8),
  singular1stPerson: Word('подозреваю', 8),
  singular2ndPerson: Word('подозреваешь', 8),
  singular3rdPerson: Word('подозревает', 8),
  plural1stPerson: Word('подозреваем', 8),
  plural2ndPerson: Word('подозреваете', 8),
  plural3rdPerson: Word('подозревают', 8),
  masculinePast: Word('подозревал', 8),
  femininePast: Word('подозревала', 8),
  neuterPast: Word('подозревало', 8),
  pluralPast: Word('подозревали', 8),
  imperativeInformal: Word('подозревай', 8),
  imperativeFormal: Word('подозревайте', 8),
  imperfect: ['заподозрить'],
};

perfectVerbs.set(подозревать.name.text, подозревать);

export { подозревать };