import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запьянствовать: PerfectVerb = {
  name: Word('запьянствовать', 4),
  singular1stPerson: Word('запьянствую', 4),
  singular2ndPerson: Word('запьянствуешь', 4),
  singular3rdPerson: Word('запьянствует', 4),
  plural1stPerson: Word('запьянствуем', 4),
  plural2ndPerson: Word('запьянствуете', 4),
  plural3rdPerson: Word('запьянствуют', 4),
  masculinePast: Word('запьянствовал', 4),
  femininePast: Word('запьянствовала', 4),
  neuterPast: Word('запьянствовало', 4),
  pluralPast: Word('запьянствовали', 4),
  imperativeInformal: Word('запьянствуй', 4),
  imperativeFormal: Word('запьянствуйте', 4),
  imperfect: [],
};

perfectVerbs.set(запьянствовать.name.text, запьянствовать);

export { запьянствовать };