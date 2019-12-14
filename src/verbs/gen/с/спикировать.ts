import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спикировать: PerfectVerb = {
  name: Word('спикировать', 4),
  singular1stPerson: Word('спикирую', 4),
  singular2ndPerson: Word('спикируешь', 4),
  singular3rdPerson: Word('спикирует', 4),
  plural1stPerson: Word('спикируем', 4),
  plural2ndPerson: Word('спикируете', 4),
  plural3rdPerson: Word('спикируют', 4),
  masculinePast: Word('спикировал', 4),
  femininePast: Word('спикировала', 4),
  neuterPast: Word('спикировало', 4),
  pluralPast: Word('спикировали', 4),
  imperativeInformal: Word('спикируй', 4),
  imperativeFormal: Word('спикируйте', 4),
  imperfect: [],
};

perfectVerbs.set(спикировать.name.text, спикировать);

export { спикировать };