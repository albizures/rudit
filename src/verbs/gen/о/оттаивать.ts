import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттаивать: PerfectVerb = {
  name: Word('оттаивать', 3),
  singular1stPerson: Word('оттаиваю', 3),
  singular2ndPerson: Word('оттаиваешь', 3),
  singular3rdPerson: Word('оттаивает', 3),
  plural1stPerson: Word('оттаиваем', 3),
  plural2ndPerson: Word('оттаиваете', 3),
  plural3rdPerson: Word('оттаивают', 3),
  masculinePast: Word('оттаивал', 3),
  femininePast: Word('оттаивала', 3),
  neuterPast: Word('оттаивало', 3),
  pluralPast: Word('оттаивали', 3),
  imperativeInformal: Word('оттаивай', 3),
  imperativeFormal: Word('оттаивайте', 3),
  imperfect: [],
};

perfectVerbs.set(оттаивать.name.text, оттаивать);

export { оттаивать };