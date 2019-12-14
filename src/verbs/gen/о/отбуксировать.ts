import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отбуксировать: PerfectVerb = {
  name: Word('отбуксировать', 6),
  singular1stPerson: Word('отбуксирую', 6),
  singular2ndPerson: Word('отбуксируешь', 6),
  singular3rdPerson: Word('отбуксирует', 6),
  plural1stPerson: Word('отбуксируем', 6),
  plural2ndPerson: Word('отбуксируете', 6),
  plural3rdPerson: Word('отбуксируют', 6),
  masculinePast: Word('отбуксировал', 6),
  femininePast: Word('отбуксировала', 6),
  neuterPast: Word('отбуксировало', 6),
  pluralPast: Word('отбуксировали', 6),
  imperativeInformal: Word('отбуксируй', 6),
  imperativeFormal: Word('отбуксируйте', 6),
  imperfect: [],
};

perfectVerbs.set(отбуксировать.name.text, отбуксировать);

export { отбуксировать };