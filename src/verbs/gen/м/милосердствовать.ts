import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const милосердствовать: PerfectVerb = {
  name: Word('милосердствовать', 5),
  singular1stPerson: Word('милосердствую', 5),
  singular2ndPerson: Word('милосердствуешь', 5),
  singular3rdPerson: Word('милосердствует', 5),
  plural1stPerson: Word('милосердствуем', 5),
  plural2ndPerson: Word('милосердствуете', 5),
  plural3rdPerson: Word('милосердствуют', 5),
  masculinePast: Word('милосердствовал', 5),
  femininePast: Word('милосердствовала', 5),
  neuterPast: Word('милосердствовало', 5),
  pluralPast: Word('милосердствовали', 5),
  imperativeInformal: Word('милосердствуй', 5),
  imperativeFormal: Word('милосердствуйте', 5),
  imperfect: [],
};

perfectVerbs.set(милосердствовать.name.text, милосердствовать);

export { милосердствовать };