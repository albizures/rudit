import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лидировать: PerfectVerb = {
  name: Word('лидировать', 3),
  singular1stPerson: Word('лидирую', 3),
  singular2ndPerson: Word('лидируешь', 3),
  singular3rdPerson: Word('лидирует', 3),
  plural1stPerson: Word('лидируем', 3),
  plural2ndPerson: Word('лидируете', 3),
  plural3rdPerson: Word('лидируют', 3),
  masculinePast: Word('лидировал', 3),
  femininePast: Word('лидировала', 3),
  neuterPast: Word('лидировало', 3),
  pluralPast: Word('лидировали', 3),
  imperativeInformal: Word('лидируй', 3),
  imperativeFormal: Word('лидируйте', 3),
  imperfect: [],
};

perfectVerbs.set(лидировать.name.text, лидировать);

export { лидировать };