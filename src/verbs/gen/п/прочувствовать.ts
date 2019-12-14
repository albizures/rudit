import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прочувствовать: PerfectVerb = {
  name: Word('прочувствовать', 4),
  singular1stPerson: Word('прочувствую', 4),
  singular2ndPerson: Word('прочувствуешь', 4),
  singular3rdPerson: Word('прочувствует', 4),
  plural1stPerson: Word('прочувствуем', 4),
  plural2ndPerson: Word('прочувствуете', 4),
  plural3rdPerson: Word('прочувствуют', 4),
  masculinePast: Word('прочувствовал', 4),
  femininePast: Word('прочувствовала', 4),
  neuterPast: Word('прочувствовало', 4),
  pluralPast: Word('прочувствовали', 4),
  imperativeInformal: Word('прочувствуй', 4),
  imperativeFormal: Word('прочувствуйте', 4),
  imperfect: [],
};

perfectVerbs.set(прочувствовать.name.text, прочувствовать);

export { прочувствовать };