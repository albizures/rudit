import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстёгивать: PerfectVerb = {
  name: Word('отстёгивать', 8),
  singular1stPerson: Word('отстёгиваю', 8),
  singular2ndPerson: Word('отстёгиваешь', 8),
  singular3rdPerson: Word('отстёгивает', 8),
  plural1stPerson: Word('отстёгиваем', 8),
  plural2ndPerson: Word('отстёгиваете', 8),
  plural3rdPerson: Word('отстёгивают', 8),
  masculinePast: Word('отстёгивал', 8),
  femininePast: Word('отстёгивала', 8),
  neuterPast: Word('отстёгивало', 8),
  pluralPast: Word('отстёгивали', 8),
  imperativeInformal: Word('отстёгивай', 8),
  imperativeFormal: Word('отстёгивайте', 8),
  imperfect: [],
};

perfectVerbs.set(отстёгивать.name.text, отстёгивать);

export { отстёгивать };