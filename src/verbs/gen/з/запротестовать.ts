import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запротестовать: PerfectVerb = {
  name: Word('запротестовать', 11),
  singular1stPerson: Word('запротестую', 9),
  singular2ndPerson: Word('запротестуешь', 9),
  singular3rdPerson: Word('запротестует', 9),
  plural1stPerson: Word('запротестуем', 9),
  plural2ndPerson: Word('запротестуете', 9),
  plural3rdPerson: Word('запротестуют', 9),
  masculinePast: Word('запротестовал', 11),
  femininePast: Word('запротестовала', 11),
  neuterPast: Word('запротестовало', 11),
  pluralPast: Word('запротестовали', 11),
  imperativeInformal: Word('запротестуй', 9),
  imperativeFormal: Word('запротестуйте', 9),
  imperfect: [],
};

perfectVerbs.set(запротестовать.name.text, запротестовать);

export { запротестовать };