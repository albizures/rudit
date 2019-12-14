import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поучаствовать: PerfectVerb = {
  name: Word('поучаствовать', 4),
  singular1stPerson: Word('поучаствую', 4),
  singular2ndPerson: Word('поучаствуешь', 4),
  singular3rdPerson: Word('поучаствует', 4),
  plural1stPerson: Word('поучаствуем', 4),
  plural2ndPerson: Word('поучаствуете', 4),
  plural3rdPerson: Word('поучаствуют', 4),
  masculinePast: Word('поучаствовал', 4),
  femininePast: Word('поучаствовала', 4),
  neuterPast: Word('поучаствовало', 4),
  pluralPast: Word('поучаствовали', 4),
  imperativeInformal: Word('поучаствуй', 4),
  imperativeFormal: Word('поучаствуйте', 4),
  imperfect: [],
};

perfectVerbs.set(поучаствовать.name.text, поучаствовать);

export { поучаствовать };