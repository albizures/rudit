import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свивать: PerfectVerb = {
  name: Word('свивать', 4),
  singular1stPerson: Word('свиваю', 4),
  singular2ndPerson: Word('свиваешь', 4),
  singular3rdPerson: Word('свивает', 4),
  plural1stPerson: Word('свиваем', 4),
  plural2ndPerson: Word('свиваете', 4),
  plural3rdPerson: Word('свивают', 4),
  masculinePast: Word('свивал', 4),
  femininePast: Word('свивала', 4),
  neuterPast: Word('свивало', 4),
  pluralPast: Word('свивали', 4),
  imperativeInformal: Word('свивай', 4),
  imperativeFormal: Word('свивайте', 4),
  imperfect: [],
};

perfectVerbs.set(свивать.name.text, свивать);

export { свивать };