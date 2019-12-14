import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поприветствовать: PerfectVerb = {
  name: Word('поприветствовать', 6),
  singular1stPerson: Word('поприветствую', 6),
  singular2ndPerson: Word('поприветствуешь', 6),
  singular3rdPerson: Word('поприветствует', 6),
  plural1stPerson: Word('поприветствуем', 6),
  plural2ndPerson: Word('поприветствуете', 6),
  plural3rdPerson: Word('поприветствуют', 6),
  masculinePast: Word('поприветствовал', 6),
  femininePast: Word('поприветствовала', 6),
  neuterPast: Word('поприветствовало', 6),
  pluralPast: Word('поприветствовали', 6),
  imperativeInformal: Word('поприветствуй', 6),
  imperativeFormal: Word('поприветствуйте', 6),
  imperfect: [],
};

perfectVerbs.set(поприветствовать.name.text, поприветствовать);

export { поприветствовать };