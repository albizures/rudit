import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шокировать: PerfectVerb = {
  name: Word('шокировать', 3),
  singular1stPerson: Word('шокирую', 3),
  singular2ndPerson: Word('шокируешь', 3),
  singular3rdPerson: Word('шокирует', 3),
  plural1stPerson: Word('шокируем', 3),
  plural2ndPerson: Word('шокируете', 3),
  plural3rdPerson: Word('шокируют', 3),
  masculinePast: Word('шокировал', 3),
  femininePast: Word('шокировала', 3),
  neuterPast: Word('шокировало', 3),
  pluralPast: Word('шокировали', 3),
  imperativeInformal: Word('шокируй', 3),
  imperativeFormal: Word('шокируйте', 3),
  imperfect: [],
};

perfectVerbs.set(шокировать.name.text, шокировать);

export { шокировать };