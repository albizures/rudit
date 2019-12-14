import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const избаловать: PerfectVerb = {
  name: Word('избаловать', 7),
  singular1stPerson: Word('избалую', 5),
  singular2ndPerson: Word('избалуешь', 5),
  singular3rdPerson: Word('избалует', 5),
  plural1stPerson: Word('избалуем', 5),
  plural2ndPerson: Word('избалуете', 5),
  plural3rdPerson: Word('избалуют', 5),
  masculinePast: Word('избаловал', 7),
  femininePast: Word('избаловала', 7),
  neuterPast: Word('избаловало', 7),
  pluralPast: Word('избаловали', 7),
  imperativeInformal: Word('избалуй', 5),
  imperativeFormal: Word('избалуйте', 5),
  imperfect: [],
};

perfectVerbs.set(избаловать.name.text, избаловать);

export { избаловать };