import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завинчивать: PerfectVerb = {
  name: Word('завинчивать', 3),
  singular1stPerson: Word('завинчиваю', 3),
  singular2ndPerson: Word('завинчиваешь', 3),
  singular3rdPerson: Word('завинчивает', 3),
  plural1stPerson: Word('завинчиваем', 3),
  plural2ndPerson: Word('завинчиваете', 3),
  plural3rdPerson: Word('завинчивают', 3),
  masculinePast: Word('завинчивал', 3),
  femininePast: Word('завинчивала', 3),
  neuterPast: Word('завинчивало', 3),
  pluralPast: Word('завинчивали', 3),
  imperativeInformal: Word('завинчивай', 3),
  imperativeFormal: Word('завинчивайте', 3),
  imperfect: [],
};

perfectVerbs.set(завинчивать.name.text, завинчивать);

export { завинчивать };