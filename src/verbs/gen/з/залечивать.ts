import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const залечивать: PerfectVerb = {
  name: Word('залечивать', 3),
  singular1stPerson: Word('залечиваю', 3),
  singular2ndPerson: Word('залечиваешь', 3),
  singular3rdPerson: Word('залечивает', 3),
  plural1stPerson: Word('залечиваем', 3),
  plural2ndPerson: Word('залечиваете', 3),
  plural3rdPerson: Word('залечивают', 3),
  masculinePast: Word('залечивал', 3),
  femininePast: Word('залечивала', 3),
  neuterPast: Word('залечивало', 3),
  pluralPast: Word('залечивали', 3),
  imperativeInformal: Word('залечивай', 3),
  imperativeFormal: Word('залечивайте', 3),
  imperfect: [],
};

perfectVerbs.set(залечивать.name.text, залечивать);

export { залечивать };