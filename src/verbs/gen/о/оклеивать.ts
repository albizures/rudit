import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оклеивать: PerfectVerb = {
  name: Word('оклеивать', 3),
  singular1stPerson: Word('оклеиваю', 3),
  singular2ndPerson: Word('оклеиваешь', 3),
  singular3rdPerson: Word('оклеивает', 3),
  plural1stPerson: Word('оклеиваем', 3),
  plural2ndPerson: Word('оклеиваете', 3),
  plural3rdPerson: Word('оклеивают', 3),
  masculinePast: Word('оклеивал', 3),
  femininePast: Word('оклеивала', 3),
  neuterPast: Word('оклеивало', 3),
  pluralPast: Word('оклеивали', 3),
  imperativeInformal: Word('оклеивай', 3),
  imperativeFormal: Word('оклеивайте', 3),
  imperfect: [],
};

perfectVerbs.set(оклеивать.name.text, оклеивать);

export { оклеивать };