import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оторачивать: PerfectVerb = {
  name: Word('оторачивать', 4),
  singular1stPerson: Word('оторачиваю', 4),
  singular2ndPerson: Word('оторачиваешь', 4),
  singular3rdPerson: Word('оторачивает', 4),
  plural1stPerson: Word('оторачиваем', 4),
  plural2ndPerson: Word('оторачиваете', 4),
  plural3rdPerson: Word('оторачивают', 4),
  masculinePast: Word('оторачивал', 4),
  femininePast: Word('оторачивала', 4),
  neuterPast: Word('оторачивало', 4),
  pluralPast: Word('оторачивали', 4),
  imperativeInformal: Word('оторачивай', 4),
  imperativeFormal: Word('оторачивайте', 4),
  imperfect: [],
};

perfectVerbs.set(оторачивать.name.text, оторачивать);

export { оторачивать };