import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закашивать: PerfectVerb = {
  name: Word('закашивать', 3),
  singular1stPerson: Word('закашиваю', 3),
  singular2ndPerson: Word('закашиваешь', 3),
  singular3rdPerson: Word('закашивает', 3),
  plural1stPerson: Word('закашиваем', 3),
  plural2ndPerson: Word('закашиваете', 3),
  plural3rdPerson: Word('закашивают', 3),
  masculinePast: Word('закашивал', 3),
  femininePast: Word('закашивала', 3),
  neuterPast: Word('закашивало', 3),
  pluralPast: Word('закашивали', 3),
  imperativeInformal: Word('закашивай', 3),
  imperativeFormal: Word('закашивайте', 3),
  imperfect: [],
};

perfectVerbs.set(закашивать.name.text, закашивать);

export { закашивать };