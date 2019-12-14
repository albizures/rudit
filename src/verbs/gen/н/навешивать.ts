import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навешивать: PerfectVerb = {
  name: Word('навешивать', 3),
  singular1stPerson: Word('навешиваю', 3),
  singular2ndPerson: Word('навешиваешь', 3),
  singular3rdPerson: Word('навешивает', 3),
  plural1stPerson: Word('навешиваем', 3),
  plural2ndPerson: Word('навешиваете', 3),
  plural3rdPerson: Word('навешивают', 3),
  masculinePast: Word('навешивал', 3),
  femininePast: Word('навешивала', 3),
  neuterPast: Word('навешивало', 3),
  pluralPast: Word('навешивали', 3),
  imperativeInformal: Word('навешивай', 3),
  imperativeFormal: Word('навешивайте', 3),
  imperfect: [],
};

perfectVerbs.set(навешивать.name.text, навешивать);

export { навешивать };