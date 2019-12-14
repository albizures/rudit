import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развешивать: PerfectVerb = {
  name: Word('развешивать', 4),
  singular1stPerson: Word('развешиваю', 4),
  singular2ndPerson: Word('развешиваешь', 4),
  singular3rdPerson: Word('развешивает', 4),
  plural1stPerson: Word('развешиваем', 4),
  plural2ndPerson: Word('развешиваете', 4),
  plural3rdPerson: Word('развешивают', 4),
  masculinePast: Word('развешивал', 4),
  femininePast: Word('развешивала', 4),
  neuterPast: Word('развешивало', 4),
  pluralPast: Word('развешивали', 4),
  imperativeInformal: Word('развешивай', 4),
  imperativeFormal: Word('развешивайте', 4),
  imperfect: [],
};

perfectVerbs.set(развешивать.name.text, развешивать);

export { развешивать };