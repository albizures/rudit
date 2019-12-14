import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застёгивать: PerfectVerb = {
  name: Word('застёгивать', 4),
  singular1stPerson: Word('застёгиваю', 4),
  singular2ndPerson: Word('застёгиваешь', 4),
  singular3rdPerson: Word('застёгивает', 4),
  plural1stPerson: Word('застёгиваем', 4),
  plural2ndPerson: Word('застёгиваете', 4),
  plural3rdPerson: Word('застёгивают', 4),
  masculinePast: Word('застёгивал', 4),
  femininePast: Word('застёгивала', 4),
  neuterPast: Word('застёгивало', 4),
  pluralPast: Word('застёгивали', 4),
  imperativeInformal: Word('застёгивай', 4),
  imperativeFormal: Word('застёгивайте', 4),
  imperfect: [],
};

perfectVerbs.set(застёгивать.name.text, застёгивать);

export { застёгивать };