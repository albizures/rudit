import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выворачивать: PerfectVerb = {
  name: Word('выворачивать', 5),
  singular1stPerson: Word('выворачиваю', 5),
  singular2ndPerson: Word('выворачиваешь', 5),
  singular3rdPerson: Word('выворачивает', 5),
  plural1stPerson: Word('выворачиваем', 5),
  plural2ndPerson: Word('выворачиваете', 5),
  plural3rdPerson: Word('выворачивают', 5),
  masculinePast: Word('выворачивал', 5),
  femininePast: Word('выворачивала', 5),
  neuterPast: Word('выворачивало', 5),
  pluralPast: Word('выворачивали', 5),
  imperativeInformal: Word('выворачивай', 5),
  imperativeFormal: Word('выворачивайте', 5),
  imperfect: [],
};

perfectVerbs.set(выворачивать.name.text, выворачивать);

export { выворачивать };