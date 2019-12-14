import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развинчивать: PerfectVerb = {
  name: Word('развинчивать', 4),
  singular1stPerson: Word('развинчиваю', 4),
  singular2ndPerson: Word('развинчиваешь', 4),
  singular3rdPerson: Word('развинчивает', 4),
  plural1stPerson: Word('развинчиваем', 4),
  plural2ndPerson: Word('развинчиваете', 4),
  plural3rdPerson: Word('развинчивают', 4),
  masculinePast: Word('развинчивал', 4),
  femininePast: Word('развинчивала', 4),
  neuterPast: Word('развинчивало', 4),
  pluralPast: Word('развинчивали', 4),
  imperativeInformal: Word('развинчивай', 4),
  imperativeFormal: Word('развинчивайте', 4),
  imperfect: [],
};

perfectVerbs.set(развинчивать.name.text, развинчивать);

export { развинчивать };