import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оплачивать: PerfectVerb = {
  name: Word('оплачивать', 3),
  singular1stPerson: Word('оплачиваю', 3),
  singular2ndPerson: Word('оплачиваешь', 3),
  singular3rdPerson: Word('оплачивает', 3),
  plural1stPerson: Word('оплачиваем', 3),
  plural2ndPerson: Word('оплачиваете', 3),
  plural3rdPerson: Word('оплачивают', 3),
  masculinePast: Word('оплачивал', 3),
  femininePast: Word('оплачивала', 3),
  neuterPast: Word('оплачивало', 3),
  pluralPast: Word('оплачивали', 3),
  imperativeInformal: Word('оплачивай', 3),
  imperativeFormal: Word('оплачивайте', 3),
  imperfect: [],
};

perfectVerbs.set(оплачивать.name.text, оплачивать);

export { оплачивать };