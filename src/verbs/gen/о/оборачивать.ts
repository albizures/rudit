import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оборачивать: PerfectVerb = {
  name: Word('оборачивать', 4),
  singular1stPerson: Word('оборачиваю', 4),
  singular2ndPerson: Word('оборачиваешь', 4),
  singular3rdPerson: Word('оборачивает', 4),
  plural1stPerson: Word('оборачиваем', 4),
  plural2ndPerson: Word('оборачиваете', 4),
  plural3rdPerson: Word('оборачивают', 4),
  masculinePast: Word('оборачивал', 4),
  femininePast: Word('оборачивала', 4),
  neuterPast: Word('оборачивало', 4),
  pluralPast: Word('оборачивали', 4),
  imperativeInformal: Word('оборачивай', 4),
  imperativeFormal: Word('оборачивайте', 4),
  imperfect: [],
};

perfectVerbs.set(оборачивать.name.text, оборачивать);

export { оборачивать };