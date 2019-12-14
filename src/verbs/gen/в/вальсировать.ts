import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вальсировать: PerfectVerb = {
  name: Word('вальсировать', 5),
  singular1stPerson: Word('вальсирую', 5),
  singular2ndPerson: Word('вальсируешь', 5),
  singular3rdPerson: Word('вальсирует', 5),
  plural1stPerson: Word('вальсируем', 5),
  plural2ndPerson: Word('вальсируете', 5),
  plural3rdPerson: Word('вальсируют', 5),
  masculinePast: Word('вальсировал', 5),
  femininePast: Word('вальсировала', 5),
  neuterPast: Word('вальсировало', 5),
  pluralPast: Word('вальсировали', 5),
  imperativeInformal: Word('вальсируй', 5),
  imperativeFormal: Word('вальсируйте', 5),
  imperfect: [],
};

perfectVerbs.set(вальсировать.name.text, вальсировать);

export { вальсировать };