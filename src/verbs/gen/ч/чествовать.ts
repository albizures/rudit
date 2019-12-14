import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чествовать: PerfectVerb = {
  name: Word('чествовать', 1),
  singular1stPerson: Word('чествую', 1),
  singular2ndPerson: Word('чествуешь', 1),
  singular3rdPerson: Word('чествует', 1),
  plural1stPerson: Word('чествуем', 1),
  plural2ndPerson: Word('чествуете', 1),
  plural3rdPerson: Word('чествуют', 1),
  masculinePast: Word('чествовал', 1),
  femininePast: Word('чествовала', 1),
  neuterPast: Word('чествовало', 1),
  pluralPast: Word('чествовали', 1),
  imperativeInformal: Word('чествуй', 1),
  imperativeFormal: Word('чествуйте', 1),
  imperfect: [],
};

perfectVerbs.set(чествовать.name.text, чествовать);

export { чествовать };