import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кондиционировать: PerfectVerb = {
  name: Word('кондиционировать', 9),
  singular1stPerson: Word('кондиционирую', 9),
  singular2ndPerson: Word('кондиционируешь', 9),
  singular3rdPerson: Word('кондиционирует', 9),
  plural1stPerson: Word('кондиционируем', 9),
  plural2ndPerson: Word('кондиционируете', 9),
  plural3rdPerson: Word('кондиционируют', 9),
  masculinePast: Word('кондиционировал', 9),
  femininePast: Word('кондиционировала', 9),
  neuterPast: Word('кондиционировало', 9),
  pluralPast: Word('кондиционировали', 9),
  imperativeInformal: Word('кондиционируй', 9),
  imperativeFormal: Word('кондиционируйте', 9),
  imperfect: [],
};

perfectVerbs.set(кондиционировать.name.text, кондиционировать);

export { кондиционировать };