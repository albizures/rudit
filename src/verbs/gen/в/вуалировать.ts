import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вуалировать: PerfectVerb = {
  name: Word('вуалировать', 4),
  singular1stPerson: Word('вуалирую', 4),
  singular2ndPerson: Word('вуалируешь', 4),
  singular3rdPerson: Word('вуалирует', 4),
  plural1stPerson: Word('вуалируем', 4),
  plural2ndPerson: Word('вуалируете', 4),
  plural3rdPerson: Word('вуалируют', 4),
  masculinePast: Word('вуалировал', 4),
  femininePast: Word('вуалировала', 4),
  neuterPast: Word('вуалировало', 4),
  pluralPast: Word('вуалировали', 4),
  imperativeInformal: Word('вуалируй', 4),
  imperativeFormal: Word('вуалируйте', 4),
  imperfect: [],
};

perfectVerbs.set(вуалировать.name.text, вуалировать);

export { вуалировать };