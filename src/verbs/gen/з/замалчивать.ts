import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замалчивать: PerfectVerb = {
  name: Word('замалчивать', 3),
  singular1stPerson: Word('замалчиваю', 3),
  singular2ndPerson: Word('замалчиваешь', 3),
  singular3rdPerson: Word('замалчивает', 3),
  plural1stPerson: Word('замалчиваем', 3),
  plural2ndPerson: Word('замалчиваете', 3),
  plural3rdPerson: Word('замалчивают', 3),
  masculinePast: Word('замалчивал', 3),
  femininePast: Word('замалчивала', 3),
  neuterPast: Word('замалчивало', 3),
  pluralPast: Word('замалчивали', 3),
  imperativeInformal: Word('замалчивай', 3),
  imperativeFormal: Word('замалчивайте', 3),
  imperfect: [],
};

perfectVerbs.set(замалчивать.name.text, замалчивать);

export { замалчивать };