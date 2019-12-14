import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выколачивать: PerfectVerb = {
  name: Word('выколачивать', 5),
  singular1stPerson: Word('выколачиваю', 5),
  singular2ndPerson: Word('выколачиваешь', 5),
  singular3rdPerson: Word('выколачивает', 5),
  plural1stPerson: Word('выколачиваем', 5),
  plural2ndPerson: Word('выколачиваете', 5),
  plural3rdPerson: Word('выколачивают', 5),
  masculinePast: Word('выколачивал', 5),
  femininePast: Word('выколачивала', 5),
  neuterPast: Word('выколачивало', 5),
  pluralPast: Word('выколачивали', 5),
  imperativeInformal: Word('выколачивай', 5),
  imperativeFormal: Word('выколачивайте', 5),
  imperfect: [],
};

perfectVerbs.set(выколачивать.name.text, выколачивать);

export { выколачивать };