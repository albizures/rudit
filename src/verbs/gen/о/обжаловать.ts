import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обжаловать: PerfectVerb = {
  name: Word('обжаловать', 3),
  singular1stPerson: Word('обжалую', 3),
  singular2ndPerson: Word('обжалуешь', 3),
  singular3rdPerson: Word('обжалует', 3),
  plural1stPerson: Word('обжалуем', 3),
  plural2ndPerson: Word('обжалуете', 3),
  plural3rdPerson: Word('обжалуют', 3),
  masculinePast: Word('обжаловал', 3),
  femininePast: Word('обжаловала', 3),
  neuterPast: Word('обжаловало', 3),
  pluralPast: Word('обжаловали', 3),
  imperativeInformal: Word('обжалуй', 3),
  imperativeFormal: Word('обжалуйте', 3),
  imperfect: [],
};

perfectVerbs.set(обжаловать.name.text, обжаловать);

export { обжаловать };