import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распихивать: PerfectVerb = {
  name: Word('распихивать', 4),
  singular1stPerson: Word('распихиваю', 4),
  singular2ndPerson: Word('распихиваешь', 4),
  singular3rdPerson: Word('распихивает', 4),
  plural1stPerson: Word('распихиваем', 4),
  plural2ndPerson: Word('распихиваете', 4),
  plural3rdPerson: Word('распихивают', 4),
  masculinePast: Word('распихивал', 4),
  femininePast: Word('распихивала', 4),
  neuterPast: Word('распихивало', 4),
  pluralPast: Word('распихивали', 4),
  imperativeInformal: Word('распихивай', 4),
  imperativeFormal: Word('распихивайте', 4),
  imperfect: [],
};

perfectVerbs.set(распихивать.name.text, распихивать);

export { распихивать };