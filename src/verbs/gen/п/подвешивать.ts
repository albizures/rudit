import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвешивать: PerfectVerb = {
  name: Word('подвешивать', 4),
  singular1stPerson: Word('подвешиваю', 4),
  singular2ndPerson: Word('подвешиваешь', 4),
  singular3rdPerson: Word('подвешивает', 4),
  plural1stPerson: Word('подвешиваем', 4),
  plural2ndPerson: Word('подвешиваете', 4),
  plural3rdPerson: Word('подвешивают', 4),
  masculinePast: Word('подвешивал', 4),
  femininePast: Word('подвешивала', 4),
  neuterPast: Word('подвешивало', 4),
  pluralPast: Word('подвешивали', 4),
  imperativeInformal: Word('подвешивай', 4),
  imperativeFormal: Word('подвешивайте', 4),
  imperfect: [],
};

perfectVerbs.set(подвешивать.name.text, подвешивать);

export { подвешивать };