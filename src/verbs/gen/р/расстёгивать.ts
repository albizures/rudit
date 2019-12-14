import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расстёгивать: PerfectVerb = {
  name: Word('расстёгивать', 1),
  singular1stPerson: Word('расстёгиваю', 1),
  singular2ndPerson: Word('расстёгиваешь', 1),
  singular3rdPerson: Word('расстёгивает', 1),
  plural1stPerson: Word('расстёгиваем', 1),
  plural2ndPerson: Word('расстёгиваете', 1),
  plural3rdPerson: Word('расстёгивают', 1),
  masculinePast: Word('расстёгивал', 1),
  femininePast: Word('расстёгивала', 1),
  neuterPast: Word('расстёгивало', 1),
  pluralPast: Word('расстёгивали', 1),
  imperativeInformal: Word('расстёгивай', 1),
  imperativeFormal: Word('расстёгивайте', 1),
  imperfect: [],
};

perfectVerbs.set(расстёгивать.name.text, расстёгивать);

export { расстёгивать };