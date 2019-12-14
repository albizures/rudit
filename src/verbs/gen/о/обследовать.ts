import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обследовать: PerfectVerb = {
  name: Word('обследовать', 4),
  singular1stPerson: Word('обследую', 4),
  singular2ndPerson: Word('обследуешь', 4),
  singular3rdPerson: Word('обследует', 4),
  plural1stPerson: Word('обследуем', 4),
  plural2ndPerson: Word('обследуете', 4),
  plural3rdPerson: Word('обследуют', 4),
  masculinePast: Word('обследовал', 4),
  femininePast: Word('обследовала', 4),
  neuterPast: Word('обследовало', 4),
  pluralPast: Word('обследовали', 4),
  imperativeInformal: Word('обследуй', 4),
  imperativeFormal: Word('обследуйте', 4),
  imperfect: [],
};

perfectVerbs.set(обследовать.name.text, обследовать);

export { обследовать };