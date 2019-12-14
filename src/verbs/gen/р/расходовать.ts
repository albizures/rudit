import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расходовать: PerfectVerb = {
  name: Word('расходовать', 4),
  singular1stPerson: Word('расходую', 4),
  singular2ndPerson: Word('расходуешь', 4),
  singular3rdPerson: Word('расходует', 4),
  plural1stPerson: Word('расходуем', 4),
  plural2ndPerson: Word('расходуете', 4),
  plural3rdPerson: Word('расходуют', 4),
  masculinePast: Word('расходовал', 4),
  femininePast: Word('расходовала', 4),
  neuterPast: Word('расходовало', 4),
  pluralPast: Word('расходовали', 4),
  imperativeInformal: Word('расходуй', 4),
  imperativeFormal: Word('расходуйте', 4),
  imperfect: [],
};

perfectVerbs.set(расходовать.name.text, расходовать);

export { расходовать };