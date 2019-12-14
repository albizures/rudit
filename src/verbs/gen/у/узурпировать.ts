import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const узурпировать: PerfectVerb = {
  name: Word('узурпировать', 5),
  singular1stPerson: Word('узурпирую', 5),
  singular2ndPerson: Word('узурпируешь', 5),
  singular3rdPerson: Word('узурпирует', 5),
  plural1stPerson: Word('узурпируем', 5),
  plural2ndPerson: Word('узурпируете', 5),
  plural3rdPerson: Word('узурпируют', 5),
  masculinePast: Word('узурпировал', 5),
  femininePast: Word('узурпировала', 5),
  neuterPast: Word('узурпировало', 5),
  pluralPast: Word('узурпировали', 5),
  imperativeInformal: Word('узурпируй', 5),
  imperativeFormal: Word('узурпируйте', 5),
  imperfect: [],
};

perfectVerbs.set(узурпировать.name.text, узурпировать);

export { узурпировать };