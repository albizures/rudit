import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тампонировать: PerfectVerb = {
  name: Word('тампонировать', 6),
  singular1stPerson: Word('тампонирую', 6),
  singular2ndPerson: Word('тампонируешь', 6),
  singular3rdPerson: Word('тампонирует', 6),
  plural1stPerson: Word('тампонируем', 6),
  plural2ndPerson: Word('тампонируете', 6),
  plural3rdPerson: Word('тампонируют', 6),
  masculinePast: Word('тампонировал', 6),
  femininePast: Word('тампонировала', 6),
  neuterPast: Word('тампонировало', 6),
  pluralPast: Word('тампонировали', 6),
  imperativeInformal: Word('тампонируй', 6),
  imperativeFormal: Word('тампонируйте', 6),
  imperfect: [],
};

perfectVerbs.set(тампонировать.name.text, тампонировать);

export { тампонировать };