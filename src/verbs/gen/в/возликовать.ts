import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возликовать: PerfectVerb = {
  name: Word('возликовать', 8),
  singular1stPerson: Word('возликую', 6),
  singular2ndPerson: Word('возликуешь', 6),
  singular3rdPerson: Word('возликует', 6),
  plural1stPerson: Word('возликуем', 6),
  plural2ndPerson: Word('возликуете', 6),
  plural3rdPerson: Word('возликуют', 6),
  masculinePast: Word('возликовал', 8),
  femininePast: Word('возликовала', 8),
  neuterPast: Word('возликовало', 8),
  pluralPast: Word('возликовали', 8),
  imperativeInformal: Word('возликуй', 6),
  imperativeFormal: Word('возликуйте', 6),
  imperfect: [],
};

perfectVerbs.set(возликовать.name.text, возликовать);

export { возликовать };