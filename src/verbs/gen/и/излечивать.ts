import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const излечивать: PerfectVerb = {
  name: Word('излечивать', 3),
  singular1stPerson: Word('излечиваю', 3),
  singular2ndPerson: Word('излечиваешь', 3),
  singular3rdPerson: Word('излечивает', 3),
  plural1stPerson: Word('излечиваем', 3),
  plural2ndPerson: Word('излечиваете', 3),
  plural3rdPerson: Word('излечивают', 3),
  masculinePast: Word('излечивал', 3),
  femininePast: Word('излечивала', 3),
  neuterPast: Word('излечивало', 3),
  pluralPast: Word('излечивали', 3),
  imperativeInformal: Word('излечивай', 3),
  imperativeFormal: Word('излечивайте', 3),
  imperfect: [],
};

perfectVerbs.set(излечивать.name.text, излечивать);

export { излечивать };