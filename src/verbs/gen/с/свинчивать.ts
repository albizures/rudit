import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свинчивать: PerfectVerb = {
  name: Word('свинчивать', 2),
  singular1stPerson: Word('свинчиваю', 2),
  singular2ndPerson: Word('свинчиваешь', 2),
  singular3rdPerson: Word('свинчивает', 2),
  plural1stPerson: Word('свинчиваем', 2),
  plural2ndPerson: Word('свинчиваете', 2),
  plural3rdPerson: Word('свинчивают', 2),
  masculinePast: Word('свинчивал', 2),
  femininePast: Word('свинчивала', 2),
  neuterPast: Word('свинчивало', 2),
  pluralPast: Word('свинчивали', 2),
  imperativeInformal: Word('свинчивай', 2),
  imperativeFormal: Word('свинчивайте', 2),
  imperfect: [],
};

perfectVerbs.set(свинчивать.name.text, свинчивать);

export { свинчивать };