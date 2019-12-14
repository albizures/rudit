import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const завешивать: PerfectVerb = {
  name: Word('завешивать', 3),
  singular1stPerson: Word('завешиваю', 3),
  singular2ndPerson: Word('завешиваешь', 3),
  singular3rdPerson: Word('завешивает', 3),
  plural1stPerson: Word('завешиваем', 3),
  plural2ndPerson: Word('завешиваете', 3),
  plural3rdPerson: Word('завешивают', 3),
  masculinePast: Word('завешивал', 3),
  femininePast: Word('завешивала', 3),
  neuterPast: Word('завешивало', 3),
  pluralPast: Word('завешивали', 3),
  imperativeInformal: Word('завешивай', 3),
  imperativeFormal: Word('завешивайте', 3),
  imperfect: [],
};

perfectVerbs.set(завешивать.name.text, завешивать);

export { завешивать };