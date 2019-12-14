import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const субсидировать: PerfectVerb = {
  name: Word('субсидировать', 6),
  singular1stPerson: Word('субсидирую', 6),
  singular2ndPerson: Word('субсидируешь', 6),
  singular3rdPerson: Word('субсидирует', 6),
  plural1stPerson: Word('субсидируем', 6),
  plural2ndPerson: Word('субсидируете', 6),
  plural3rdPerson: Word('субсидируют', 6),
  masculinePast: Word('субсидировал', 6),
  femininePast: Word('субсидировала', 6),
  neuterPast: Word('субсидировало', 6),
  pluralPast: Word('субсидировали', 6),
  imperativeInformal: Word('субсидируй', 6),
  imperativeFormal: Word('субсидируйте', 6),
  imperfect: [],
};

perfectVerbs.set(субсидировать.name.text, субсидировать);

export { субсидировать };