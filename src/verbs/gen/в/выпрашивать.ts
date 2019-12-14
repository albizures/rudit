import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпрашивать: PerfectVerb = {
  name: Word('выпрашивать', 4),
  singular1stPerson: Word('выпрашиваю', 4),
  singular2ndPerson: Word('выпрашиваешь', 4),
  singular3rdPerson: Word('выпрашивает', 4),
  plural1stPerson: Word('выпрашиваем', 4),
  plural2ndPerson: Word('выпрашиваете', 4),
  plural3rdPerson: Word('выпрашивают', 4),
  masculinePast: Word('выпрашивал', 4),
  femininePast: Word('выпрашивала', 4),
  neuterPast: Word('выпрашивало', 4),
  pluralPast: Word('выпрашивали', 4),
  imperativeInformal: Word('выпрашивай', 4),
  imperativeFormal: Word('выпрашивайте', 4),
  imperfect: [],
};

perfectVerbs.set(выпрашивать.name.text, выпрашивать);

export { выпрашивать };