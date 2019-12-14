import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const господствовать: PerfectVerb = {
  name: Word('господствовать', 4),
  singular1stPerson: Word('господствую', 4),
  singular2ndPerson: Word('господствуешь', 4),
  singular3rdPerson: Word('господствует', 4),
  plural1stPerson: Word('господствуем', 4),
  plural2ndPerson: Word('господствуете', 4),
  plural3rdPerson: Word('господствуют', 4),
  masculinePast: Word('господствовал', 4),
  femininePast: Word('господствовала', 4),
  neuterPast: Word('господствовало', 4),
  pluralPast: Word('господствовали', 4),
  imperativeInformal: Word('господствуй', 4),
  imperativeFormal: Word('господствуйте', 4),
  imperfect: [],
};

perfectVerbs.set(господствовать.name.text, господствовать);

export { господствовать };