import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наэлектризовать: PerfectVerb = {
  name: Word('наэлектризовать', 12),
  singular1stPerson: Word('наэлектризую', 10),
  singular2ndPerson: Word('наэлектризуешь', 10),
  singular3rdPerson: Word('наэлектризует', 10),
  plural1stPerson: Word('наэлектризуем', 10),
  plural2ndPerson: Word('наэлектризуете', 10),
  plural3rdPerson: Word('наэлектризуют', 10),
  masculinePast: Word('наэлектризовал', 12),
  femininePast: Word('наэлектризовала', 12),
  neuterPast: Word('наэлектризовало', 12),
  pluralPast: Word('наэлектризовали', 12),
  imperativeInformal: Word('наэлектризуй', 10),
  imperativeFormal: Word('наэлектризуйте', 10),
  imperfect: [],
};

perfectVerbs.set(наэлектризовать.name.text, наэлектризовать);

export { наэлектризовать };