import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const курсировать: PerfectVerb = {
  name: Word('курсировать', 4),
  singular1stPerson: Word('курсирую', 4),
  singular2ndPerson: Word('курсируешь', 4),
  singular3rdPerson: Word('курсирует', 4),
  plural1stPerson: Word('курсируем', 4),
  plural2ndPerson: Word('курсируете', 4),
  plural3rdPerson: Word('курсируют', 4),
  masculinePast: Word('курсировал', 4),
  femininePast: Word('курсировала', 4),
  neuterPast: Word('курсировало', 4),
  pluralPast: Word('курсировали', 4),
  imperativeInformal: Word('курсируй', 4),
  imperativeFormal: Word('курсируйте', 4),
  imperfect: [],
};

perfectVerbs.set(курсировать.name.text, курсировать);

export { курсировать };