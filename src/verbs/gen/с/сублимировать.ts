import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сублимировать: PerfectVerb = {
  name: Word('сублимировать', 6),
  singular1stPerson: Word('сублимирую', 6),
  singular2ndPerson: Word('сублимируешь', 6),
  singular3rdPerson: Word('сублимирует', 6),
  plural1stPerson: Word('сублимируем', 6),
  plural2ndPerson: Word('сублимируете', 6),
  plural3rdPerson: Word('сублимируют', 6),
  masculinePast: Word('сублимировал', 6),
  femininePast: Word('сублимировала', 6),
  neuterPast: Word('сублимировало', 6),
  pluralPast: Word('сублимировали', 6),
  imperativeInformal: Word('сублимируй', 6),
  imperativeFormal: Word('сублимируйте', 6),
  imperfect: [],
};

perfectVerbs.set(сублимировать.name.text, сублимировать);

export { сублимировать };