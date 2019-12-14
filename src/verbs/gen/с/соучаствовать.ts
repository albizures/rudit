import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const соучаствовать: PerfectVerb = {
  name: Word('соучаствовать', 4),
  singular1stPerson: Word('соучаствую', 4),
  singular2ndPerson: Word('соучаствуешь', 4),
  singular3rdPerson: Word('соучаствует', 4),
  plural1stPerson: Word('соучаствуем', 4),
  plural2ndPerson: Word('соучаствуете', 4),
  plural3rdPerson: Word('соучаствуют', 4),
  masculinePast: Word('соучаствовал', 4),
  femininePast: Word('соучаствовала', 4),
  neuterPast: Word('соучаствовало', 4),
  pluralPast: Word('соучаствовали', 4),
  imperativeInformal: Word('соучаствуй', 4),
  imperativeFormal: Word('соучаствуйте', 4),
  imperfect: [],
};

perfectVerbs.set(соучаствовать.name.text, соучаствовать);

export { соучаствовать };