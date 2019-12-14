import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посочувствовать: PerfectVerb = {
  name: Word('посочувствовать', 5),
  singular1stPerson: Word('посочувствую', 5),
  singular2ndPerson: Word('посочувствуешь', 5),
  singular3rdPerson: Word('посочувствует', 5),
  plural1stPerson: Word('посочувствуем', 5),
  plural2ndPerson: Word('посочувствуете', 5),
  plural3rdPerson: Word('посочувствуют', 5),
  masculinePast: Word('посочувствовал', 5),
  femininePast: Word('посочувствовала', 5),
  neuterPast: Word('посочувствовало', 5),
  pluralPast: Word('посочувствовали', 5),
  imperativeInformal: Word('посочувствуй', 5),
  imperativeFormal: Word('посочувствуйте', 5),
  imperfect: [],
};

perfectVerbs.set(посочувствовать.name.text, посочувствовать);

export { посочувствовать };