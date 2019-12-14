import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const потягивать: PerfectVerb = {
  name: Word('потягивать', 3),
  singular1stPerson: Word('потягиваю', 3),
  singular2ndPerson: Word('потягиваешь', 3),
  singular3rdPerson: Word('потягивает', 3),
  plural1stPerson: Word('потягиваем', 3),
  plural2ndPerson: Word('потягиваете', 3),
  plural3rdPerson: Word('потягивают', 3),
  masculinePast: Word('потягивал', 3),
  femininePast: Word('потягивала', 3),
  neuterPast: Word('потягивало', 3),
  pluralPast: Word('потягивали', 3),
  imperativeInformal: Word('потягивай', 3),
  imperativeFormal: Word('потягивайте', 3),
  imperfect: [],
};

perfectVerbs.set(потягивать.name.text, потягивать);

export { потягивать };