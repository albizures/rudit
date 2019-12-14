import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кассировать: PerfectVerb = {
  name: Word('кассировать', 4),
  singular1stPerson: Word('кассирую', 4),
  singular2ndPerson: Word('кассируешь', 4),
  singular3rdPerson: Word('кассирует', 4),
  plural1stPerson: Word('кассируем', 4),
  plural2ndPerson: Word('кассируете', 4),
  plural3rdPerson: Word('кассируют', 4),
  masculinePast: Word('кассировал', 4),
  femininePast: Word('кассировала', 4),
  neuterPast: Word('кассировало', 4),
  pluralPast: Word('кассировали', 4),
  imperativeInformal: Word('кассируй', 4),
  imperativeFormal: Word('кассируйте', 4),
  imperfect: [],
};

perfectVerbs.set(кассировать.name.text, кассировать);

export { кассировать };