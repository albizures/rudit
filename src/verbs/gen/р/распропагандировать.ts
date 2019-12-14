import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распропагандировать: PerfectVerb = {
  name: Word('распропагандировать', 12),
  singular1stPerson: Word('распропагандирую', 12),
  singular2ndPerson: Word('распропагандируешь', 12),
  singular3rdPerson: Word('распропагандирует', 12),
  plural1stPerson: Word('распропагандируем', 12),
  plural2ndPerson: Word('распропагандируете', 12),
  plural3rdPerson: Word('распропагандируют', 12),
  masculinePast: Word('распропагандировал', 12),
  femininePast: Word('распропагандировала', 12),
  neuterPast: Word('распропагандировало', 12),
  pluralPast: Word('распропагандировали', 12),
  imperativeInformal: Word('распропагандируй', 12),
  imperativeFormal: Word('распропагандируйте', 12),
  imperfect: [],
};

perfectVerbs.set(распропагандировать.name.text, распропагандировать);

export { распропагандировать };