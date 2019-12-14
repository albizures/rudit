import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свешивать: PerfectVerb = {
  name: Word('свешивать', 2),
  singular1stPerson: Word('свешиваю', 2),
  singular2ndPerson: Word('свешиваешь', 2),
  singular3rdPerson: Word('свешивает', 2),
  plural1stPerson: Word('свешиваем', 2),
  plural2ndPerson: Word('свешиваете', 2),
  plural3rdPerson: Word('свешивают', 2),
  masculinePast: Word('свешивал', 2),
  femininePast: Word('свешивала', 2),
  neuterPast: Word('свешивало', 2),
  pluralPast: Word('свешивали', 2),
  imperativeInformal: Word('свешивай', 2),
  imperativeFormal: Word('свешивайте', 2),
  imperfect: [],
};

perfectVerbs.set(свешивать.name.text, свешивать);

export { свешивать };