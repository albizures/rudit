import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const недоиспользовать: PerfectVerb = {
  name: Word('недоиспользовать', 7),
  singular1stPerson: Word('недоиспользую', 7),
  singular2ndPerson: Word('недоиспользуешь', 7),
  singular3rdPerson: Word('недоиспользует', 7),
  plural1stPerson: Word('недоиспользуем', 7),
  plural2ndPerson: Word('недоиспользуете', 7),
  plural3rdPerson: Word('недоиспользуют', 7),
  masculinePast: Word('недоиспользовал', 7),
  femininePast: Word('недоиспользовала', 7),
  neuterPast: Word('недоиспользовало', 7),
  pluralPast: Word('недоиспользовали', 7),
  imperativeInformal: Word('недоиспользуй', 7),
  imperativeFormal: Word('недоиспользуйте', 7),
  imperfect: [],
};

perfectVerbs.set(недоиспользовать.name.text, недоиспользовать);

export { недоиспользовать };