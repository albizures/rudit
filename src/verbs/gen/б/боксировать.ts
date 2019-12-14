import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const боксировать: PerfectVerb = {
  name: Word('боксировать', 4),
  singular1stPerson: Word('боксирую', 4),
  singular2ndPerson: Word('боксируешь', 4),
  singular3rdPerson: Word('боксирует', 4),
  plural1stPerson: Word('боксируем', 4),
  plural2ndPerson: Word('боксируете', 4),
  plural3rdPerson: Word('боксируют', 4),
  masculinePast: Word('боксировал', 4),
  femininePast: Word('боксировала', 4),
  neuterPast: Word('боксировало', 4),
  pluralPast: Word('боксировали', 4),
  imperativeInformal: Word('боксируй', 4),
  imperativeFormal: Word('боксируйте', 4),
  imperfect: [],
};

perfectVerbs.set(боксировать.name.text, боксировать);

export { боксировать };