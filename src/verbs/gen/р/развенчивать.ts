import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развенчивать: PerfectVerb = {
  name: Word('развенчивать', 4),
  singular1stPerson: Word('развенчиваю', 4),
  singular2ndPerson: Word('развенчиваешь', 4),
  singular3rdPerson: Word('развенчивает', 4),
  plural1stPerson: Word('развенчиваем', 4),
  plural2ndPerson: Word('развенчиваете', 4),
  plural3rdPerson: Word('развенчивают', 4),
  masculinePast: Word('развенчивал', 4),
  femininePast: Word('развенчивала', 4),
  neuterPast: Word('развенчивало', 4),
  pluralPast: Word('развенчивали', 4),
  imperativeInformal: Word('развенчивай', 4),
  imperativeFormal: Word('развенчивайте', 4),
  imperfect: [],
};

perfectVerbs.set(развенчивать.name.text, развенчивать);

export { развенчивать };