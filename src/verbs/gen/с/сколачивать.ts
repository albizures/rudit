import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сколачивать: PerfectVerb = {
  name: Word('сколачивать', 4),
  singular1stPerson: Word('сколачиваю', 4),
  singular2ndPerson: Word('сколачиваешь', 4),
  singular3rdPerson: Word('сколачивает', 4),
  plural1stPerson: Word('сколачиваем', 4),
  plural2ndPerson: Word('сколачиваете', 4),
  plural3rdPerson: Word('сколачивают', 4),
  masculinePast: Word('сколачивал', 4),
  femininePast: Word('сколачивала', 4),
  neuterPast: Word('сколачивало', 4),
  pluralPast: Word('сколачивали', 4),
  imperativeInformal: Word('сколачивай', 4),
  imperativeFormal: Word('сколачивайте', 4),
  imperfect: [],
};

perfectVerbs.set(сколачивать.name.text, сколачивать);

export { сколачивать };