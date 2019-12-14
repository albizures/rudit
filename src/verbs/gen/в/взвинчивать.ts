import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взвинчивать: PerfectVerb = {
  name: Word('взвинчивать', 3),
  singular1stPerson: Word('взвинчиваю', 3),
  singular2ndPerson: Word('взвинчиваешь', 3),
  singular3rdPerson: Word('взвинчивает', 3),
  plural1stPerson: Word('взвинчиваем', 3),
  plural2ndPerson: Word('взвинчиваете', 3),
  plural3rdPerson: Word('взвинчивают', 3),
  masculinePast: Word('взвинчивал', 3),
  femininePast: Word('взвинчивала', 3),
  neuterPast: Word('взвинчивало', 3),
  pluralPast: Word('взвинчивали', 3),
  imperativeInformal: Word('взвинчивай', 3),
  imperativeFormal: Word('взвинчивайте', 3),
  imperfect: [],
};

perfectVerbs.set(взвинчивать.name.text, взвинчивать);

export { взвинчивать };