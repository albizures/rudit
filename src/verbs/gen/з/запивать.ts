import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запивать: PerfectVerb = {
  name: Word('запивать', 5),
  singular1stPerson: Word('запиваю', 5),
  singular2ndPerson: Word('запиваешь', 5),
  singular3rdPerson: Word('запивает', 5),
  plural1stPerson: Word('запиваем', 5),
  plural2ndPerson: Word('запиваете', 5),
  plural3rdPerson: Word('запивают', 5),
  masculinePast: Word('запивал', 5),
  femininePast: Word('запивала', 5),
  neuterPast: Word('запивало', 5),
  pluralPast: Word('запивали', 5),
  imperativeInformal: Word('запивай', 5),
  imperativeFormal: Word('запивайте', 5),
  imperfect: [],
};

perfectVerbs.set(запивать.name.text, запивать);

export { запивать };