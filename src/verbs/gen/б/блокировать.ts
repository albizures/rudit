import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const блокировать: PerfectVerb = {
  name: Word('блокировать', 4),
  singular1stPerson: Word('блокирую', 4),
  singular2ndPerson: Word('блокируешь', 4),
  singular3rdPerson: Word('блокирует', 4),
  plural1stPerson: Word('блокируем', 4),
  plural2ndPerson: Word('блокируете', 4),
  plural3rdPerson: Word('блокируют', 4),
  masculinePast: Word('блокировал', 4),
  femininePast: Word('блокировала', 4),
  neuterPast: Word('блокировало', 4),
  pluralPast: Word('блокировали', 4),
  imperativeInformal: Word('блокируй', 4),
  imperativeFormal: Word('блокируйте', 4),
  imperfect: [],
};

perfectVerbs.set(блокировать.name.text, блокировать);

export { блокировать };