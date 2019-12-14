import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навинчивать: PerfectVerb = {
  name: Word('навинчивать', 3),
  singular1stPerson: Word('навинчиваю', 3),
  singular2ndPerson: Word('навинчиваешь', 3),
  singular3rdPerson: Word('навинчивает', 3),
  plural1stPerson: Word('навинчиваем', 3),
  plural2ndPerson: Word('навинчиваете', 3),
  plural3rdPerson: Word('навинчивают', 3),
  masculinePast: Word('навинчивал', 3),
  femininePast: Word('навинчивала', 3),
  neuterPast: Word('навинчивало', 3),
  pluralPast: Word('навинчивали', 3),
  imperativeInformal: Word('навинчивай', 3),
  imperativeFormal: Word('навинчивайте', 3),
  imperfect: [],
};

perfectVerbs.set(навинчивать.name.text, навинчивать);

export { навинчивать };