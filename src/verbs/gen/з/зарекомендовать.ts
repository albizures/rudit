import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зарекомендовать: PerfectVerb = {
  name: Word('зарекомендовать', 12),
  singular1stPerson: Word('зарекомендую', 10),
  singular2ndPerson: Word('зарекомендуешь', 10),
  singular3rdPerson: Word('зарекомендует', 10),
  plural1stPerson: Word('зарекомендуем', 10),
  plural2ndPerson: Word('зарекомендуете', 10),
  plural3rdPerson: Word('зарекомендуют', 10),
  masculinePast: Word('зарекомендовал', 12),
  femininePast: Word('зарекомендовала', 12),
  neuterPast: Word('зарекомендовало', 12),
  pluralPast: Word('зарекомендовали', 12),
  imperativeInformal: Word('зарекомендуй', 10),
  imperativeFormal: Word('зарекомендуйте', 10),
  imperfect: [],
};

perfectVerbs.set(зарекомендовать.name.text, зарекомендовать);

export { зарекомендовать };