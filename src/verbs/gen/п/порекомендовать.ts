import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const порекомендовать: PerfectVerb = {
  name: Word('порекомендовать', 12),
  singular1stPerson: Word('порекомендую', 10),
  singular2ndPerson: Word('порекомендуешь', 10),
  singular3rdPerson: Word('порекомендует', 10),
  plural1stPerson: Word('порекомендуем', 10),
  plural2ndPerson: Word('порекомендуете', 10),
  plural3rdPerson: Word('порекомендуют', 10),
  masculinePast: Word('порекомендовал', 12),
  femininePast: Word('порекомендовала', 12),
  neuterPast: Word('порекомендовало', 12),
  pluralPast: Word('порекомендовали', 12),
  imperativeInformal: Word('порекомендуй', 10),
  imperativeFormal: Word('порекомендуйте', 10),
  imperfect: [],
};

perfectVerbs.set(порекомендовать.name.text, порекомендовать);

export { порекомендовать };