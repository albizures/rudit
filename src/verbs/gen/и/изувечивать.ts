import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изувечивать: PerfectVerb = {
  name: Word('изувечивать', 4),
  singular1stPerson: Word('изувечиваю', 4),
  singular2ndPerson: Word('изувечиваешь', 4),
  singular3rdPerson: Word('изувечивает', 4),
  plural1stPerson: Word('изувечиваем', 4),
  plural2ndPerson: Word('изувечиваете', 4),
  plural3rdPerson: Word('изувечивают', 4),
  masculinePast: Word('изувечивал', 4),
  femininePast: Word('изувечивала', 4),
  neuterPast: Word('изувечивало', 4),
  pluralPast: Word('изувечивали', 4),
  imperativeInformal: Word('изувечивай', 4),
  imperativeFormal: Word('изувечивайте', 4),
  imperfect: [],
};

perfectVerbs.set(изувечивать.name.text, изувечивать);

export { изувечивать };