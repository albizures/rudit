import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const довинчивать: PerfectVerb = {
  name: Word('довинчивать', 3),
  singular1stPerson: Word('довинчиваю', 3),
  singular2ndPerson: Word('довинчиваешь', 3),
  singular3rdPerson: Word('довинчивает', 3),
  plural1stPerson: Word('довинчиваем', 3),
  plural2ndPerson: Word('довинчиваете', 3),
  plural3rdPerson: Word('довинчивают', 3),
  masculinePast: Word('довинчивал', 3),
  femininePast: Word('довинчивала', 3),
  neuterPast: Word('довинчивало', 3),
  pluralPast: Word('довинчивали', 3),
  imperativeInformal: Word('довинчивай', 3),
  imperativeFormal: Word('довинчивайте', 3),
  imperfect: [],
};

perfectVerbs.set(довинчивать.name.text, довинчивать);

export { довинчивать };