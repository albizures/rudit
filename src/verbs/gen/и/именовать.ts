import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const именовать: PerfectVerb = {
  name: Word('именовать', 6),
  singular1stPerson: Word('именую', 4),
  singular2ndPerson: Word('именуешь', 4),
  singular3rdPerson: Word('именует', 4),
  plural1stPerson: Word('именуем', 4),
  plural2ndPerson: Word('именуете', 4),
  plural3rdPerson: Word('именуют', 4),
  masculinePast: Word('именовал', 6),
  femininePast: Word('именовала', 6),
  neuterPast: Word('именовало', 6),
  pluralPast: Word('именовали', 6),
  imperativeInformal: Word('именуй', 4),
  imperativeFormal: Word('именуйте', 4),
  imperfect: ['наименовать'],
};

perfectVerbs.set(именовать.name.text, именовать);

export { именовать };