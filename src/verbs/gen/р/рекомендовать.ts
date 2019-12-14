import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рекомендовать: PerfectVerb = {
  name: Word('рекомендовать', 10),
  singular1stPerson: Word('рекомендую', 8),
  singular2ndPerson: Word('рекомендуешь', 8),
  singular3rdPerson: Word('рекомендует', 8),
  plural1stPerson: Word('рекомендуем', 8),
  plural2ndPerson: Word('рекомендуете', 8),
  plural3rdPerson: Word('рекомендуют', 8),
  masculinePast: Word('рекомендовал', 10),
  femininePast: Word('рекомендовала', 10),
  neuterPast: Word('рекомендовало', 10),
  pluralPast: Word('рекомендовали', 10),
  imperativeInformal: Word('рекомендуй', 8),
  imperativeFormal: Word('рекомендуйте', 8),
  imperfect: ['порекомендовать'],
};

perfectVerbs.set(рекомендовать.name.text, рекомендовать);

export { рекомендовать };