import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запихивать: PerfectVerb = {
  name: Word('запихивать', 3),
  singular1stPerson: Word('запихиваю', 3),
  singular2ndPerson: Word('запихиваешь', 3),
  singular3rdPerson: Word('запихивает', 3),
  plural1stPerson: Word('запихиваем', 3),
  plural2ndPerson: Word('запихиваете', 3),
  plural3rdPerson: Word('запихивают', 3),
  masculinePast: Word('запихивал', 3),
  femininePast: Word('запихивала', 3),
  neuterPast: Word('запихивало', 3),
  pluralPast: Word('запихивали', 3),
  imperativeInformal: Word('запихивай', 3),
  imperativeFormal: Word('запихивайте', 3),
  imperfect: [],
};

perfectVerbs.set(запихивать.name.text, запихивать);

export { запихивать };