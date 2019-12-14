import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запрограммировать: PerfectVerb = {
  name: Word('запрограммировать', 10),
  singular1stPerson: Word('запрограммирую', 10),
  singular2ndPerson: Word('запрограммируешь', 10),
  singular3rdPerson: Word('запрограммирует', 10),
  plural1stPerson: Word('запрограммируем', 10),
  plural2ndPerson: Word('запрограммируете', 10),
  plural3rdPerson: Word('запрограммируют', 10),
  masculinePast: Word('запрограммировал', 10),
  femininePast: Word('запрограммировала', 10),
  neuterPast: Word('запрограммировало', 10),
  pluralPast: Word('запрограммировали', 10),
  imperativeInformal: Word('запрограммируй', 10),
  imperativeFormal: Word('запрограммируйте', 10),
  imperfect: [],
};

perfectVerbs.set(запрограммировать.name.text, запрограммировать);

export { запрограммировать };