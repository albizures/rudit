import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подвинчивать: PerfectVerb = {
  name: Word('подвинчивать', 4),
  singular1stPerson: Word('подвинчиваю', 4),
  singular2ndPerson: Word('подвинчиваешь', 4),
  singular3rdPerson: Word('подвинчивает', 4),
  plural1stPerson: Word('подвинчиваем', 4),
  plural2ndPerson: Word('подвинчиваете', 4),
  plural3rdPerson: Word('подвинчивают', 4),
  masculinePast: Word('подвинчивал', 4),
  femininePast: Word('подвинчивала', 4),
  neuterPast: Word('подвинчивало', 4),
  pluralPast: Word('подвинчивали', 4),
  imperativeInformal: Word('подвинчивай', 4),
  imperativeFormal: Word('подвинчивайте', 4),
  imperfect: [],
};

perfectVerbs.set(подвинчивать.name.text, подвинчивать);

export { подвинчивать };