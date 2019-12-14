import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оседать: PerfectVerb = {
  name: Word('оседать', 4),
  singular1stPerson: Word('оседаю', 4),
  singular2ndPerson: Word('оседаешь', 4),
  singular3rdPerson: Word('оседает', 4),
  plural1stPerson: Word('оседаем', 4),
  plural2ndPerson: Word('оседаете', 4),
  plural3rdPerson: Word('оседают', 4),
  masculinePast: Word('оседал', 4),
  femininePast: Word('оседала', 4),
  neuterPast: Word('оседало', 4),
  pluralPast: Word('оседали', 4),
  imperativeInformal: Word('оседай', 4),
  imperativeFormal: Word('оседайте', 4),
  imperfect: [],
};

perfectVerbs.set(оседать.name.text, оседать);

export { оседать };