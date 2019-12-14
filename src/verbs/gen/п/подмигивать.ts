import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подмигивать: PerfectVerb = {
  name: Word('подмигивать', 4),
  singular1stPerson: Word('подмигиваю', 4),
  singular2ndPerson: Word('подмигиваешь', 4),
  singular3rdPerson: Word('подмигивает', 4),
  plural1stPerson: Word('подмигиваем', 4),
  plural2ndPerson: Word('подмигиваете', 4),
  plural3rdPerson: Word('подмигивают', 4),
  masculinePast: Word('подмигивал', 4),
  femininePast: Word('подмигивала', 4),
  neuterPast: Word('подмигивало', 4),
  pluralPast: Word('подмигивали', 4),
  imperativeInformal: Word('подмигивай', 4),
  imperativeFormal: Word('подмигивайте', 4),
  imperfect: [],
};

perfectVerbs.set(подмигивать.name.text, подмигивать);

export { подмигивать };