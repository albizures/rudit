import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const кустарничать: PerfectVerb = {
  name: Word('кустарничать', 4),
  singular1stPerson: Word('кустарничаю', 4),
  singular2ndPerson: Word('кустарничаешь', 4),
  singular3rdPerson: Word('кустарничает', 4),
  plural1stPerson: Word('кустарничаем', 4),
  plural2ndPerson: Word('кустарничаете', 4),
  plural3rdPerson: Word('кустарничают', 4),
  masculinePast: Word('кустарничал', 4),
  femininePast: Word('кустарничала', 4),
  neuterPast: Word('кустарничало', 4),
  pluralPast: Word('кустарничали', 4),
  imperativeInformal: Word('кустарничай', 4),
  imperativeFormal: Word('кустарничайте', 4),
  imperfect: [],
};

perfectVerbs.set(кустарничать.name.text, кустарничать);

export { кустарничать };