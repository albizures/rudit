import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вотировать: PerfectVerb = {
  name: Word('вотировать', 3),
  singular1stPerson: Word('вотирую', 3),
  singular2ndPerson: Word('вотируешь', 3),
  singular3rdPerson: Word('вотирует', 3),
  plural1stPerson: Word('вотируем', 3),
  plural2ndPerson: Word('вотируете', 3),
  plural3rdPerson: Word('вотируют', 3),
  masculinePast: Word('вотировал', 3),
  femininePast: Word('вотировала', 3),
  neuterPast: Word('вотировало', 3),
  pluralPast: Word('вотировали', 3),
  imperativeInformal: Word('вотируй', 3),
  imperativeFormal: Word('вотируйте', 3),
  imperfect: [],
};

perfectVerbs.set(вотировать.name.text, вотировать);

export { вотировать };