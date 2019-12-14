import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тиражировать: PerfectVerb = {
  name: Word('тиражировать', 5),
  singular1stPerson: Word('тиражирую', 5),
  singular2ndPerson: Word('тиражируешь', 5),
  singular3rdPerson: Word('тиражирует', 5),
  plural1stPerson: Word('тиражируем', 5),
  plural2ndPerson: Word('тиражируете', 5),
  plural3rdPerson: Word('тиражируют', 5),
  masculinePast: Word('тиражировал', 5),
  femininePast: Word('тиражировала', 5),
  neuterPast: Word('тиражировало', 5),
  pluralPast: Word('тиражировали', 5),
  imperativeInformal: Word('тиражируй', 5),
  imperativeFormal: Word('тиражируйте', 5),
  imperfect: [],
};

perfectVerbs.set(тиражировать.name.text, тиражировать);

export { тиражировать };