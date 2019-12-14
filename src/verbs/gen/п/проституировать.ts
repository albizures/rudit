import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проституировать: PerfectVerb = {
  name: Word('проституировать', 8),
  singular1stPerson: Word('проституирую', 8),
  singular2ndPerson: Word('проституируешь', 8),
  singular3rdPerson: Word('проституирует', 8),
  plural1stPerson: Word('проституируем', 8),
  plural2ndPerson: Word('проституируете', 8),
  plural3rdPerson: Word('проституируют', 8),
  masculinePast: Word('проституировал', 8),
  femininePast: Word('проституировала', 8),
  neuterPast: Word('проституировало', 8),
  pluralPast: Word('проституировали', 8),
  imperativeInformal: Word('проституируй', 8),
  imperativeFormal: Word('проституируйте', 8),
  imperfect: [],
};

perfectVerbs.set(проституировать.name.text, проституировать);

export { проституировать };