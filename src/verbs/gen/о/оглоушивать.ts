import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оглоушивать: PerfectVerb = {
  name: Word('оглоушивать', 4),
  singular1stPerson: Word('оглоушиваю', 4),
  singular2ndPerson: Word('оглоушиваешь', 4),
  singular3rdPerson: Word('оглоушивает', 4),
  plural1stPerson: Word('оглоушиваем', 4),
  plural2ndPerson: Word('оглоушиваете', 4),
  plural3rdPerson: Word('оглоушивают', 4),
  masculinePast: Word('оглоушивал', 4),
  femininePast: Word('оглоушивала', 4),
  neuterPast: Word('оглоушивало', 4),
  pluralPast: Word('оглоушивали', 4),
  imperativeInformal: Word('оглоушивай', 4),
  imperativeFormal: Word('оглоушивайте', 4),
  imperfect: [],
};

perfectVerbs.set(оглоушивать.name.text, оглоушивать);

export { оглоушивать };