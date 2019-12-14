import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттачивать: PerfectVerb = {
  name: Word('оттачивать', 3),
  singular1stPerson: Word('оттачиваю', 3),
  singular2ndPerson: Word('оттачиваешь', 3),
  singular3rdPerson: Word('оттачивает', 3),
  plural1stPerson: Word('оттачиваем', 3),
  plural2ndPerson: Word('оттачиваете', 3),
  plural3rdPerson: Word('оттачивают', 3),
  masculinePast: Word('оттачивал', 3),
  femininePast: Word('оттачивала', 3),
  neuterPast: Word('оттачивало', 3),
  pluralPast: Word('оттачивали', 3),
  imperativeInformal: Word('оттачивай', 3),
  imperativeFormal: Word('оттачивайте', 3),
  imperfect: [],
};

perfectVerbs.set(оттачивать.name.text, оттачивать);

export { оттачивать };