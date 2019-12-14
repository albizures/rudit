import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застёгивать: PerfectVerb = {
  name: Word('застёгивать', 1),
  singular1stPerson: Word('застёгиваю', 1),
  singular2ndPerson: Word('застёгиваешь', 1),
  singular3rdPerson: Word('застёгивает', 1),
  plural1stPerson: Word('застёгиваем', 1),
  plural2ndPerson: Word('застёгиваете', 1),
  plural3rdPerson: Word('застёгивают', 1),
  masculinePast: Word('застёгивал', 1),
  femininePast: Word('застёгивала', 1),
  neuterPast: Word('застёгивало', 1),
  pluralPast: Word('застёгивали', 1),
  imperativeInformal: Word('застёгивай', 1),
  imperativeFormal: Word('застёгивайте', 1),
  imperfect: [],
};

perfectVerbs.set(застёгивать.name.text, застёгивать);

export { застёгивать };