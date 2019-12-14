import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отрекомендовать: PerfectVerb = {
  name: Word('отрекомендовать', 12),
  singular1stPerson: Word('отрекомендую', 10),
  singular2ndPerson: Word('отрекомендуешь', 10),
  singular3rdPerson: Word('отрекомендует', 10),
  plural1stPerson: Word('отрекомендуем', 10),
  plural2ndPerson: Word('отрекомендуете', 10),
  plural3rdPerson: Word('отрекомендуют', 10),
  masculinePast: Word('отрекомендовал', 12),
  femininePast: Word('отрекомендовала', 12),
  neuterPast: Word('отрекомендовало', 12),
  pluralPast: Word('отрекомендовали', 12),
  imperativeInformal: Word('отрекомендуй', 10),
  imperativeFormal: Word('отрекомендуйте', 10),
  imperfect: [],
};

perfectVerbs.set(отрекомендовать.name.text, отрекомендовать);

export { отрекомендовать };