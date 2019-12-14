import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттаскивать: PerfectVerb = {
  name: Word('оттаскивать', 3),
  singular1stPerson: Word('оттаскиваю', 3),
  singular2ndPerson: Word('оттаскиваешь', 3),
  singular3rdPerson: Word('оттаскивает', 3),
  plural1stPerson: Word('оттаскиваем', 3),
  plural2ndPerson: Word('оттаскиваете', 3),
  plural3rdPerson: Word('оттаскивают', 3),
  masculinePast: Word('оттаскивал', 3),
  femininePast: Word('оттаскивала', 3),
  neuterPast: Word('оттаскивало', 3),
  pluralPast: Word('оттаскивали', 3),
  imperativeInformal: Word('оттаскивай', 3),
  imperativeFormal: Word('оттаскивайте', 3),
  imperfect: [],
};

perfectVerbs.set(оттаскивать.name.text, оттаскивать);

export { оттаскивать };