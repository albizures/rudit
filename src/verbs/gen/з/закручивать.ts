import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закручивать: PerfectVerb = {
  name: Word('закручивать', 4),
  singular1stPerson: Word('закручиваю', 4),
  singular2ndPerson: Word('закручиваешь', 4),
  singular3rdPerson: Word('закручивает', 4),
  plural1stPerson: Word('закручиваем', 4),
  plural2ndPerson: Word('закручиваете', 4),
  plural3rdPerson: Word('закручивают', 4),
  masculinePast: Word('закручивал', 4),
  femininePast: Word('закручивала', 4),
  neuterPast: Word('закручивало', 4),
  pluralPast: Word('закручивали', 4),
  imperativeInformal: Word('закручивай', 4),
  imperativeFormal: Word('закручивайте', 4),
  imperfect: [],
};

perfectVerbs.set(закручивать.name.text, закручивать);

export { закручивать };