import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const глазировать: PerfectVerb = {
  name: Word('глазировать', 8),
  singular1stPerson: Word('глазирую', 6),
  singular2ndPerson: Word('глазируешь', 6),
  singular3rdPerson: Word('глазирует', 6),
  plural1stPerson: Word('глазируем', 6),
  plural2ndPerson: Word('глазируете', 6),
  plural3rdPerson: Word('глазируют', 6),
  masculinePast: Word('глазировал', 8),
  femininePast: Word('глазировала', 8),
  neuterPast: Word('глазировало', 8),
  pluralPast: Word('глазировали', 8),
  imperativeInformal: Word('глазируй', 6),
  imperativeFormal: Word('глазируйте', 6),
  imperfect: [],
};

perfectVerbs.set(глазировать.name.text, глазировать);

export { глазировать };