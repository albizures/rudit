import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замешивать: PerfectVerb = {
  name: Word('замешивать', 3),
  singular1stPerson: Word('замешиваю', 3),
  singular2ndPerson: Word('замешиваешь', 3),
  singular3rdPerson: Word('замешивает', 3),
  plural1stPerson: Word('замешиваем', 3),
  plural2ndPerson: Word('замешиваете', 3),
  plural3rdPerson: Word('замешивают', 3),
  masculinePast: Word('замешивал', 3),
  femininePast: Word('замешивала', 3),
  neuterPast: Word('замешивало', 3),
  pluralPast: Word('замешивали', 3),
  imperativeInformal: Word('замешивай', 3),
  imperativeFormal: Word('замешивайте', 3),
  imperfect: [],
};

perfectVerbs.set(замешивать.name.text, замешивать);

export { замешивать };