import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расстёгивать: PerfectVerb = {
  name: Word('расстёгивать', 5),
  singular1stPerson: Word('расстёгиваю', 5),
  singular2ndPerson: Word('расстёгиваешь', 5),
  singular3rdPerson: Word('расстёгивает', 5),
  plural1stPerson: Word('расстёгиваем', 5),
  plural2ndPerson: Word('расстёгиваете', 5),
  plural3rdPerson: Word('расстёгивают', 5),
  masculinePast: Word('расстёгивал', 5),
  femininePast: Word('расстёгивала', 5),
  neuterPast: Word('расстёгивало', 5),
  pluralPast: Word('расстёгивали', 5),
  imperativeInformal: Word('расстёгивай', 5),
  imperativeFormal: Word('расстёгивайте', 5),
  imperfect: [],
};

perfectVerbs.set(расстёгивать.name.text, расстёгивать);

export { расстёгивать };