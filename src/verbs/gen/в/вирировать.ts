import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вирировать: PerfectVerb = {
  name: Word('вирировать', 3),
  singular1stPerson: Word('вирирую', 3),
  singular2ndPerson: Word('вирируешь', 3),
  singular3rdPerson: Word('вирирует', 3),
  plural1stPerson: Word('вирируем', 3),
  plural2ndPerson: Word('вирируете', 3),
  plural3rdPerson: Word('вирируют', 3),
  masculinePast: Word('вирировал', 3),
  femininePast: Word('вирировала', 3),
  neuterPast: Word('вирировало', 3),
  pluralPast: Word('вирировали', 3),
  imperativeInformal: Word('вирируй', 3),
  imperativeFormal: Word('вирируйте', 3),
  imperfect: [],
};

perfectVerbs.set(вирировать.name.text, вирировать);

export { вирировать };