import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкачивать: PerfectVerb = {
  name: Word('выкачивать', 3),
  singular1stPerson: Word('выкачиваю', 3),
  singular2ndPerson: Word('выкачиваешь', 3),
  singular3rdPerson: Word('выкачивает', 3),
  plural1stPerson: Word('выкачиваем', 3),
  plural2ndPerson: Word('выкачиваете', 3),
  plural3rdPerson: Word('выкачивают', 3),
  masculinePast: Word('выкачивал', 3),
  femininePast: Word('выкачивала', 3),
  neuterPast: Word('выкачивало', 3),
  pluralPast: Word('выкачивали', 3),
  imperativeInformal: Word('выкачивай', 3),
  imperativeFormal: Word('выкачивайте', 3),
  imperfect: [],
};

perfectVerbs.set(выкачивать.name.text, выкачивать);

export { выкачивать };