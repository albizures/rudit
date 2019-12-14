import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оперировать: PerfectVerb = {
  name: Word('оперировать', 4),
  singular1stPerson: Word('оперирую', 4),
  singular2ndPerson: Word('оперируешь', 4),
  singular3rdPerson: Word('оперирует', 4),
  plural1stPerson: Word('оперируем', 4),
  plural2ndPerson: Word('оперируете', 4),
  plural3rdPerson: Word('оперируют', 4),
  masculinePast: Word('оперировал', 4),
  femininePast: Word('оперировала', 4),
  neuterPast: Word('оперировало', 4),
  pluralPast: Word('оперировали', 4),
  imperativeInformal: Word('оперируй', 4),
  imperativeFormal: Word('оперируйте', 4),
  imperfect: [],
};

perfectVerbs.set(оперировать.name.text, оперировать);

export { оперировать };