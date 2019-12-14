import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкрашивать: PerfectVerb = {
  name: Word('выкрашивать', 4),
  singular1stPerson: Word('выкрашиваю', 4),
  singular2ndPerson: Word('выкрашиваешь', 4),
  singular3rdPerson: Word('выкрашивает', 4),
  plural1stPerson: Word('выкрашиваем', 4),
  plural2ndPerson: Word('выкрашиваете', 4),
  plural3rdPerson: Word('выкрашивают', 4),
  masculinePast: Word('выкрашивал', 4),
  femininePast: Word('выкрашивала', 4),
  neuterPast: Word('выкрашивало', 4),
  pluralPast: Word('выкрашивали', 4),
  imperativeInformal: Word('выкрашивай', 4),
  imperativeFormal: Word('выкрашивайте', 4),
  imperfect: [],
};

perfectVerbs.set(выкрашивать.name.text, выкрашивать);

export { выкрашивать };