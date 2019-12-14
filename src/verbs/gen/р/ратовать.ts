import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ратовать: PerfectVerb = {
  name: Word('ратовать', 1),
  singular1stPerson: Word('ратую', 1),
  singular2ndPerson: Word('ратуешь', 1),
  singular3rdPerson: Word('ратует', 1),
  plural1stPerson: Word('ратуем', 1),
  plural2ndPerson: Word('ратуете', 1),
  plural3rdPerson: Word('ратуют', 1),
  masculinePast: Word('ратовал', 1),
  femininePast: Word('ратовала', 1),
  neuterPast: Word('ратовало', 1),
  pluralPast: Word('ратовали', 1),
  imperativeInformal: Word('ратуй', 1),
  imperativeFormal: Word('ратуйте', 1),
  imperfect: [],
};

perfectVerbs.set(ратовать.name.text, ратовать);

export { ратовать };