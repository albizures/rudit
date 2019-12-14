import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const костюмировать: PerfectVerb = {
  name: Word('костюмировать', 10),
  singular1stPerson: Word('костюмирую', 8),
  singular2ndPerson: Word('костюмируешь', 8),
  singular3rdPerson: Word('костюмирует', 8),
  plural1stPerson: Word('костюмируем', 8),
  plural2ndPerson: Word('костюмируете', 8),
  plural3rdPerson: Word('костюмируют', 8),
  masculinePast: Word('костюмировал', 10),
  femininePast: Word('костюмировала', 10),
  neuterPast: Word('костюмировало', 10),
  pluralPast: Word('костюмировали', 10),
  imperativeInformal: Word('костюмируй', 8),
  imperativeFormal: Word('костюмируйте', 8),
  imperfect: [],
};

perfectVerbs.set(костюмировать.name.text, костюмировать);

export { костюмировать };