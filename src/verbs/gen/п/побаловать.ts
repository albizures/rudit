import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const побаловать: PerfectVerb = {
  name: Word('побаловать', 7),
  singular1stPerson: Word('побалую', 5),
  singular2ndPerson: Word('побалуешь', 5),
  singular3rdPerson: Word('побалует', 5),
  plural1stPerson: Word('побалуем', 5),
  plural2ndPerson: Word('побалуете', 5),
  plural3rdPerson: Word('побалуют', 5),
  masculinePast: Word('побаловал', 7),
  femininePast: Word('побаловала', 7),
  neuterPast: Word('побаловало', 7),
  pluralPast: Word('побаловали', 7),
  imperativeInformal: Word('побалуй', 5),
  imperativeFormal: Word('побалуйте', 5),
  imperfect: [],
};

perfectVerbs.set(побаловать.name.text, побаловать);

export { побаловать };