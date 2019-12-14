import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закрашивать: PerfectVerb = {
  name: Word('закрашивать', 4),
  singular1stPerson: Word('закрашиваю', 4),
  singular2ndPerson: Word('закрашиваешь', 4),
  singular3rdPerson: Word('закрашивает', 4),
  plural1stPerson: Word('закрашиваем', 4),
  plural2ndPerson: Word('закрашиваете', 4),
  plural3rdPerson: Word('закрашивают', 4),
  masculinePast: Word('закрашивал', 4),
  femininePast: Word('закрашивала', 4),
  neuterPast: Word('закрашивало', 4),
  pluralPast: Word('закрашивали', 4),
  imperativeInformal: Word('закрашивай', 4),
  imperativeFormal: Word('закрашивайте', 4),
  imperfect: [],
};

perfectVerbs.set(закрашивать.name.text, закрашивать);

export { закрашивать };