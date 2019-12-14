import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навивать: PerfectVerb = {
  name: Word('навивать', 5),
  singular1stPerson: Word('навиваю', 5),
  singular2ndPerson: Word('навиваешь', 5),
  singular3rdPerson: Word('навивает', 5),
  plural1stPerson: Word('навиваем', 5),
  plural2ndPerson: Word('навиваете', 5),
  plural3rdPerson: Word('навивают', 5),
  masculinePast: Word('навивал', 5),
  femininePast: Word('навивала', 5),
  neuterPast: Word('навивало', 5),
  pluralPast: Word('навивали', 5),
  imperativeInformal: Word('навивай', 5),
  imperativeFormal: Word('навивайте', 5),
  imperfect: [],
};

perfectVerbs.set(навивать.name.text, навивать);

export { навивать };