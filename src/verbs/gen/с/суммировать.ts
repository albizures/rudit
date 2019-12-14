import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const суммировать: PerfectVerb = {
  name: Word('суммировать', 4),
  singular1stPerson: Word('суммирую', 4),
  singular2ndPerson: Word('суммируешь', 4),
  singular3rdPerson: Word('суммирует', 4),
  plural1stPerson: Word('суммируем', 4),
  plural2ndPerson: Word('суммируете', 4),
  plural3rdPerson: Word('суммируют', 4),
  masculinePast: Word('суммировал', 4),
  femininePast: Word('суммировала', 4),
  neuterPast: Word('суммировало', 4),
  pluralPast: Word('суммировали', 4),
  imperativeInformal: Word('суммируй', 4),
  imperativeFormal: Word('суммируйте', 4),
  imperfect: [],
};

perfectVerbs.set(суммировать.name.text, суммировать);

export { суммировать };