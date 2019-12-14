import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изрешечивать: PerfectVerb = {
  name: Word('изрешечивать', 5),
  singular1stPerson: Word('изрешечиваю', 5),
  singular2ndPerson: Word('изрешечиваешь', 5),
  singular3rdPerson: Word('изрешечивает', 5),
  plural1stPerson: Word('изрешечиваем', 5),
  plural2ndPerson: Word('изрешечиваете', 5),
  plural3rdPerson: Word('изрешечивают', 5),
  masculinePast: Word('изрешечивал', 5),
  femininePast: Word('изрешечивала', 5),
  neuterPast: Word('изрешечивало', 5),
  pluralPast: Word('изрешечивали', 5),
  imperativeInformal: Word('изрешечивай', 5),
  imperativeFormal: Word('изрешечивайте', 5),
  imperfect: [],
};

perfectVerbs.set(изрешечивать.name.text, изрешечивать);

export { изрешечивать };