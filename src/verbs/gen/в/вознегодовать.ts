import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вознегодовать: PerfectVerb = {
  name: Word('вознегодовать', 10),
  singular1stPerson: Word('вознегодую', 8),
  singular2ndPerson: Word('вознегодуешь', 8),
  singular3rdPerson: Word('вознегодует', 8),
  plural1stPerson: Word('вознегодуем', 8),
  plural2ndPerson: Word('вознегодуете', 8),
  plural3rdPerson: Word('вознегодуют', 8),
  masculinePast: Word('вознегодовал', 10),
  femininePast: Word('вознегодовала', 10),
  neuterPast: Word('вознегодовало', 10),
  pluralPast: Word('вознегодовали', 10),
  imperativeInformal: Word('вознегодуй', 8),
  imperativeFormal: Word('вознегодуйте', 8),
  imperfect: [],
};

perfectVerbs.set(вознегодовать.name.text, вознегодовать);

export { вознегодовать };