import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тонировать: PerfectVerb = {
  name: Word('тонировать', 3),
  singular1stPerson: Word('тонирую', 3),
  singular2ndPerson: Word('тонируешь', 3),
  singular3rdPerson: Word('тонирует', 3),
  plural1stPerson: Word('тонируем', 3),
  plural2ndPerson: Word('тонируете', 3),
  plural3rdPerson: Word('тонируют', 3),
  masculinePast: Word('тонировал', 3),
  femininePast: Word('тонировала', 3),
  neuterPast: Word('тонировало', 3),
  pluralPast: Word('тонировали', 3),
  imperativeInformal: Word('тонируй', 3),
  imperativeFormal: Word('тонируйте', 3),
  imperfect: [],
};

perfectVerbs.set(тонировать.name.text, тонировать);

export { тонировать };