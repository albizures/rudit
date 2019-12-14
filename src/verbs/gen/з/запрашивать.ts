import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запрашивать: PerfectVerb = {
  name: Word('запрашивать', 4),
  singular1stPerson: Word('запрашиваю', 4),
  singular2ndPerson: Word('запрашиваешь', 4),
  singular3rdPerson: Word('запрашивает', 4),
  plural1stPerson: Word('запрашиваем', 4),
  plural2ndPerson: Word('запрашиваете', 4),
  plural3rdPerson: Word('запрашивают', 4),
  masculinePast: Word('запрашивал', 4),
  femininePast: Word('запрашивала', 4),
  neuterPast: Word('запрашивало', 4),
  pluralPast: Word('запрашивали', 4),
  imperativeInformal: Word('запрашивай', 4),
  imperativeFormal: Word('запрашивайте', 4),
  imperfect: [],
};

perfectVerbs.set(запрашивать.name.text, запрашивать);

export { запрашивать };