import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const моделировать: PerfectVerb = {
  name: Word('моделировать', 5),
  singular1stPerson: Word('моделирую', 5),
  singular2ndPerson: Word('моделируешь', 5),
  singular3rdPerson: Word('моделирует', 5),
  plural1stPerson: Word('моделируем', 5),
  plural2ndPerson: Word('моделируете', 5),
  plural3rdPerson: Word('моделируют', 5),
  masculinePast: Word('моделировал', 5),
  femininePast: Word('моделировала', 5),
  neuterPast: Word('моделировало', 5),
  pluralPast: Word('моделировали', 5),
  imperativeInformal: Word('моделируй', 5),
  imperativeFormal: Word('моделируйте', 5),
  imperfect: [],
};

perfectVerbs.set(моделировать.name.text, моделировать);

export { моделировать };