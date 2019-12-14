import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разжаловать: PerfectVerb = {
  name: Word('разжаловать', 4),
  singular1stPerson: Word('разжалую', 4),
  singular2ndPerson: Word('разжалуешь', 4),
  singular3rdPerson: Word('разжалует', 4),
  plural1stPerson: Word('разжалуем', 4),
  plural2ndPerson: Word('разжалуете', 4),
  plural3rdPerson: Word('разжалуют', 4),
  masculinePast: Word('разжаловал', 4),
  femininePast: Word('разжаловала', 4),
  neuterPast: Word('разжаловало', 4),
  pluralPast: Word('разжаловали', 4),
  imperativeInformal: Word('разжалуй', 4),
  imperativeFormal: Word('разжалуйте', 4),
  imperfect: [],
};

perfectVerbs.set(разжаловать.name.text, разжаловать);

export { разжаловать };