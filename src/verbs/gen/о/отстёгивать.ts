import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстёгивать: PerfectVerb = {
  name: Word('отстёгивать', 4),
  singular1stPerson: Word('отстёгиваю', 4),
  singular2ndPerson: Word('отстёгиваешь', 4),
  singular3rdPerson: Word('отстёгивает', 4),
  plural1stPerson: Word('отстёгиваем', 4),
  plural2ndPerson: Word('отстёгиваете', 4),
  plural3rdPerson: Word('отстёгивают', 4),
  masculinePast: Word('отстёгивал', 4),
  femininePast: Word('отстёгивала', 4),
  neuterPast: Word('отстёгивало', 4),
  pluralPast: Word('отстёгивали', 4),
  imperativeInformal: Word('отстёгивай', 4),
  imperativeFormal: Word('отстёгивайте', 4),
  imperfect: [],
};

perfectVerbs.set(отстёгивать.name.text, отстёгивать);

export { отстёгивать };